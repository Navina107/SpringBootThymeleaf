package com.coats.model;

public enum SkillSet {

	JAVA("JAVA"), 
	SALESFORCE("SALESFORCE"),
	ANGULARJS("ANGULARJS");


	public static final SkillSet[] ALL = { JAVA, SALESFORCE,ANGULARJS};


	private final String name;


	public static SkillSet forName(final String name) {
		if (name == null) {
			throw new IllegalArgumentException("Name cannot be null for type");
		}
		if (name.toUpperCase().equals("JAVA")) {
			return JAVA;
		} else if (name.toUpperCase().equals("SALESFORCE")) {
			return SALESFORCE;
		}
		else if (name.toUpperCase().equals("ANGULARJS")) {
			return ANGULARJS;
		}

		throw new IllegalArgumentException("Name \"" + name + "\" does not correspond to any Type");
	}


	private SkillSet(final String name) {
		this.name = name;
	}


	public String getName() {
		return this.name;
	}

	@Override
	public String toString() {
		return getName();
	}
}
