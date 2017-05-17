package com.coats.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {

	@RequestMapping(value ="/onloading",method = RequestMethod.GET)
    public String login() {
		//.addObject("userName", "Umaiyal");
       return "<div>Hello Umaiyal!!..</div><div>Welcome to coats</div> ";
		
    }
}
