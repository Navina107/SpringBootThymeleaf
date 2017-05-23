package com.employee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

/**
 * @SpringBootApplication : Tells spring boot that it the starting point for spring boot application
 */
@SpringBootApplication
public class EmployeeInfoApplication extends SpringBootServletInitializer {
	
   //Spring boot works as stand-alone app. It does not need a servlet container and need not be deployed on a server.
	
	public static void main(String[] args) {
		
		//creates a servlet container and hosts the application the servletcontainer
		//SpringApplication - static class run(name of the class that has main method,pass thru of the args)
		SpringApplication.run(EmployeeInfoApplication.class, args);
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(EmployeeInfoApplication.class);
    }

    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }
}


