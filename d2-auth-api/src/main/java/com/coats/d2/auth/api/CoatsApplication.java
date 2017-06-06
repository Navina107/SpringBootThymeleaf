package com.coats.d2.auth.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

/**
 * @SpringBootApplication : Tells spring boot that it the starting point for spring boot application
 */
@SpringBootApplication
@ComponentScan(basePackages = {"com.auth0.web", "com.coats.d2.auth.api"})
@PropertySources({
	@PropertySource("classpath:auth0.properties")
})

public class CoatsApplication {

	public static void main(String[] args) {

		SpringApplication.run(CoatsApplication.class, args);
	}
}