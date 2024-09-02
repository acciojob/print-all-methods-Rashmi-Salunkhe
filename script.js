function allMethods() {
    // Get all properties of the Math object
    const properties = Object.getOwnPropertyNames(Math);
    
    // Filter out only the methods (functions)
    const methods = properties.filter(property => typeof Math[property] === 'function');
    
    // Join the method names into a comma-separated string
    return methods.join(', ');
}

// Display the methods in an alert box
alert(allMethods());
