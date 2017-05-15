package com.employee.controller;

import java.util.Hashtable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.emploee.model.Employee;
import com.employee.service.EmployeeService;

/**
 *  @ File Name : EmployeeController.java
 *  @ Description : Rest controller with CRUD end-points
 */
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	
	/**
	 * retriveEmployeeData : Method returns all the employee details
	 */
	@RequestMapping(value = "/retrive", method = RequestMethod.GET)
	public Hashtable<String,Employee> retriveEmployeeData(){
		return employeeService.retriveEmployeeDetails();

	}

	
	/**
	 * createEmployeeData : Method adds new employee data
	 */
	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public String createEmployeeData(@RequestBody Employee employee){
		return employeeService.createEmployeeDetails(employee);
	}

	
	/**
	 * updateEmployeeData : Method updates the existing employee's data
	 */
	@RequestMapping(value = "/update/{employeeId}",method = RequestMethod.PUT)
	public String updateEmployeeData(@RequestBody Employee employee,@PathVariable String employeeId ){
		return employeeService.updateEmployeeDetails(employee,employeeId);
	}

	
	/**
	 * deleteEmployeeData : Method deletes employee detail
	 */
	@RequestMapping(value = "/delete/{employeeId}",method = RequestMethod.DELETE)
	public String deleteEmployeeData(@PathVariable String employeeId ){
		return employeeService.deleteEmployeeDetail(employeeId);
	}

	/**
	 * Give Model View
	 */
	/*@RequestMapping(value ="/login",method = RequestMethod.GET)
    public ModelAndView login() {
		//.addObject("userName", "Umaiyal");
		System.out.println("umiyal");
       return new ModelAndView("user");
		
    }*/
	
	@CrossOrigin(origins = "http://localhost:8500")
	@RequestMapping(value ="/login",method = RequestMethod.GET)
    public String login() {
		//.addObject("userName", "Umaiyal");
       return "<div>Hi Umaiyal!!..</div><div>Welcome to coats</div> ";
		
    }
}
