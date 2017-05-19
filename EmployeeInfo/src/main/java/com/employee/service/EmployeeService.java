package com.employee.service;

import java.util.Hashtable;
import org.springframework.stereotype.Service;

import com.employee.model.Employee;

@Service
public class EmployeeService {

	Hashtable<String,Employee> employeeData = new Hashtable<String,Employee>(); 

	public EmployeeService() {
		Employee employee = new Employee("112244","Ananya",24,"Sr Analyst",3200000);
		employeeData.put(employee.getId(),employee);
		employee = new Employee("113388","Balu",22,"Analyst",3200000);
		employeeData.put(employee.getId(),employee);
	}


	/** Returns the employee details
	 * @return HashTable<String,Employee> employeeData
	 */
	public Hashtable<String,Employee> retriveEmployeeDetails(){
		return employeeData;

	}

	/** Returns the employee detail provided employee id
	 * @return HashTable<String,Employee> employeeData
	 */
	public Employee retriveEmployeeDetailsById(String employeeId) {
		return employeeData.get(employeeId);
	}

	/** Adds new employee data
	 * @param employee
	 * @return String
	 */
	public String createEmployeeDetails(Employee employee){
		try{
			employeeData.put(employee.getId(), employee);
			return "Employee data created for::"+employee.getName();
		}
		catch (Exception exception) {
			return "Employee data with null id cannot be created";
		}

	}

	/** Deletes employee detail
	 * @param employeeId
	 * @return String message
	 */
	public String deleteEmployeeDetail(String employeeId){
		if(employeeId != null){
			employeeData.remove(employeeId);
		}
		return "Employee deleted";
	}


	/** Updates employee detail by fetching the employee id
	 * @param employeeId
	 * @param employee
	 * @return String status
	 */
	public String updateEmployeeDetails(Employee employee,String employeeId){

		if(employee != null && employeeId != null){
			employeeData.put(employeeId, employee);

		}
		return "employee data updated";
	}

}
