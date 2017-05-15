package com.emploee.model;

public class Employee {
	
	private String employeeId;
	private String employeeName;
	private int employeeAge;
	private String employeeDesignation;
	private double employeeSalary;
	
	public Employee()
	{
		
	}
	public Employee(String id, String name, int age, String designation, double salary) {
		super();
		this.employeeId = id;
		this.employeeName = name;
		this.employeeAge = age;
		this.employeeDesignation = designation;
		this.employeeSalary = salary;
	}
	
	public String getId() {
		return employeeId;
	}
	public void setId(String id) {
		this.employeeId = id;
	}
	public String getName() {
		return employeeName;
	}
	public void setName(String name) {
		this.employeeName = name;
	}
	public int getAge() {
		return employeeAge;
	}
	public void setAge(int age) {
		this.employeeAge = age;
	}
	public String getDesignation() {
		return employeeDesignation;
	}
	public void setDesignation(String designation) {
		this.employeeDesignation = designation;
	}
	public double getSalary() {
		return employeeSalary;
	}
	public void setSalary(double salary) {
		this.employeeSalary = salary;
	}
	
	
}
