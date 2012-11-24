class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :set_locale

  private

  def set_locale
    logger.info "* Accept-Language: #{request.env['HTTP_ACCEPT_LANGUAGE']}"
    if LANGUAGES_SUPPORTED.include? params[:locale]
      I18n.locale = session[:locale] = params[:locale]
    else
      if LANGUAGES_SUPPORTED.include? session[:locale]
        I18n.locale = session[:locale]
      else
        if false # !current_user.language.nil? # TODO: create migration
          I18n.locale = :es # current_user.language
        else
          I18n.locale = extract_locale_from_accept_language_header
        end
      end
    end
    logger.info "* Locale set to '#{I18n.locale}'"
  end

  # auxiliar

  def extract_locale_from_accept_language_header
    var = request.env['HTTP_ACCEPT_LANGUAGE']
    if var
      if LANGUAGES_SUPPORTED.include? var.scan(/^[a-z]{2}/).first
        var.scan(/^[a-z]{2}/).first
      else
        'es'
      end
    else
      'es'
    end
  end
end
