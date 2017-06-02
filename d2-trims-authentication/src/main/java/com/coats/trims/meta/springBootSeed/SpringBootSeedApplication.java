package com.coats.trims.meta.springBootSeed;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

@SpringBootApplication
@ComponentScan(basePackages = {"com.auth0.web", "com.coats.trims.meta.springBootSeed"})
@PropertySources({
	@PropertySource("classpath:auth0.properties")
})

public class SpringBootSeedApplication {

	public static void main(String[] args) {

		SpringApplication.run(SpringBootSeedApplication.class, args);
	}
}