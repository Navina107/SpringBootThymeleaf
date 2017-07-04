package com.coats.controller;

import java.beans.PropertyEditorSupport;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.coats.model.BusinessUnit;
import com.coats.model.CoatsEmployee;


@Controller
public class HomeControllor {
	
	/*@InitBinder     
	public void initBinder(WebDataBinder binder){
	     binder.registerCustomEditor(       Date.class,     
	                         new CustomDateEditor(new SimpleDateFormat("dd-mmm-yyyy"), true));   
	}*/

	
	@RequestMapping("/")
	public String view(CoatsEmployee coatsEmployee) {
		coatsEmployee.setDateOfJoining(new Date());
		return "CoatsHome";
	}

	@ModelAttribute("allBusinessUnits")
    public List<BusinessUnit> populateTypes() {
        return Arrays.asList(BusinessUnit.ALL);
    }
	
	@RequestMapping( method = RequestMethod.POST,value = "/formData")
	public String createEmployeeData(@Valid final CoatsEmployee coatsEmployee, final BindingResult bindingResult, final ModelMap model) {
		if (bindingResult.hasErrors()) {
			return "CoatsHome";
		}
		model.clear();
		return "results";

	}

}

