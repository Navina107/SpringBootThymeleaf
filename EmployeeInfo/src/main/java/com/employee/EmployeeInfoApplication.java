package com.employee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @SpringBootApplication : Tells spring boot that it the starting point for spring boot application
 */
@SpringBootApplication
public class EmployeeInfoApplication {
	
   //Spring boot works as stand-alone app. It does not need a servlet container and need not be deployed on a server.
	
	public static void main(String[] args) {
		
		//creates a servlet container and hosts the application the servletcontainer
		//SpringApplication - static class run(name of the class that has main method,pass thru of the args)
		SpringApplication.run(EmployeeInfoApplication.class, args);
	}
}


