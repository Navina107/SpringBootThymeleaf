package com.coats.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeControllor {

	
	@RequestMapping("/")
    public String view() {
        return "CoatsHome";
    }
	
}

