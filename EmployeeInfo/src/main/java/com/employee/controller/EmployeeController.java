

package com.employee.controller;

import java.util.Hashtable;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.employee.model.Employee;
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
	@RequestMapping(value = "/employee")
	public Hashtable<String,Employee> retriveEmployeeData(){
		return employeeService.retriveEmployeeDetails();

	}


	/**
	 * retriveEmployeeDataById : Method gets employee detail by taking an employeeId
	 */
	@RequestMapping(value = "/employee/{employeeId}")
	public Employee retriveEmployeeDataById(@PathVariable String employeeId){
		return employeeService.retriveEmployeeDetailsById(employeeId);

	}

	/**
	 * createEmployeeData : Method adds new employee data
	 */
	@RequestMapping( method = RequestMethod.POST,value = "/employee")
	public String createEmployeeData(@RequestBody Employee employee){
		return employeeService.createEmployeeDetails(employee);
	}


	/**
	 * updateEmployeeData : Method updates the existing employee's data
	 */
	@RequestMapping(method = RequestMethod.PUT,value = "/employee/{employeeId}")
	public String updateEmployeeData(@RequestBody Employee employee,@PathVariable String employeeId ){
		return employeeService.updateEmployeeDetails(employee,employeeId);
	}


	/**
	 * deleteEmployeeData : Method deletes employee detail
	 */
	@RequestMapping(method = RequestMethod.DELETE,value = "/employee/{employeeId}")
	public String deleteEmployeeData(@PathVariable String employeeId ){
		return employeeService.deleteEmployeeDetail(employeeId);
	}

	/**
	 * Give Model and View
	 */
	@CrossOrigin(origins = "http://localhost:8500")
	@RequestMapping(value ="/login",method = RequestMethod.GET)
	public ModelAndView login() {
		System.out.println("am called");
		return new ModelAndView("user").addObject("userName", "Umaiyal");

	}


	@RequestMapping(value = { "/version" })
	public String getVersion() {
		return "1.0";
	}
	
	@RequestMapping(method = { RequestMethod.GET }, value = { "/hello" })
    public String sayHello(HttpServletResponse response) {
        return "hello";
    }

    @RequestMapping(method = { RequestMethod.POST }, value = { "/baeldung" })
    public String sayHelloPost(HttpServletResponse response) {
        return "hello";
    }

}
