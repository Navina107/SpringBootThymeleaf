package com.coats.d2.auth.api.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import com.auth0.web.Auth0Config;
import com.auth0.web.Auth0Filter;


@Component
@Configuration

public class AppConfig extends Auth0Config {

   @Bean
   public FilterRegistrationBean filterRegistration() {
       final FilterRegistrationBean registration = new FilterRegistrationBean();
       registration.setFilter(new Auth0Filter(this));
       registration.addUrlPatterns(securedRoute);
       registration.addInitParameter("redirectOnAuthError", loginRedirectOnFail);
       registration.setName("Auth0Filter");
       return registration;
   }

}
