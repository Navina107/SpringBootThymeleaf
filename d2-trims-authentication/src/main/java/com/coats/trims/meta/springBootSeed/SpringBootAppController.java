package com.coats.trims.meta.springBootSeed;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.auth0.NonceUtils;

@Controller
public class SpringBootAppController{
	

	private AppConfig appConfig;

    @Autowired
    public SpringBootAppController(AppConfig appConfig) {
        this.appConfig = appConfig;
    }
	@RequestMapping(value ="/login",method = RequestMethod.GET)	
	public String view(final HttpServletRequest req) {
		System.out.println("am called");
		  // add a Nonce value to session storage
        NonceUtils.addNonceToStorage(req);
		return "CoatsLogin"; 	
	}

}
