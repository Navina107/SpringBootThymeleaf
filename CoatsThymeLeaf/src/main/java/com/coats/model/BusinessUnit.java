package com.coats.model;

public enum BusinessUnit {
	
	APPS_UK("APPS_UK"), 
    NAM("NAM"), 
    GE("GE");

    
    public static final BusinessUnit[] ALL = { APPS_UK, NAM, GE };
    
    
    private final String name;

    
    
    public static BusinessUnit forName(final String name) {
        if (name == null) {
            throw new IllegalArgumentException("Name cannot be null for BusinessUnit");
        }
        if (name.toUpperCase().equals("APPS_UK")) {
            return APPS_UK;
        } else if (name.toUpperCase().equals("NAM")) {
            return NAM;
        } else if (name.toUpperCase().equals("GE")) {
            return GE;
        }
        throw new IllegalArgumentException("Name \"" + name + "\" does not correspond to any BusinessUnit");
    }
    
    
    private BusinessUnit(final String name) {
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
