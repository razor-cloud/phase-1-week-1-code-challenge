//Import the readline module and create an interface for reading input from the terminal
const readline = require('readline').createInterface({
  input: process.stdin,  // Set standard input as the input source
  output: process.stdout  // Set standard output as the output destination
});

// Function to calculate net salary based on basic salary, benefits, and effective date
function calculateNetSalary(basicSalary, benefits, effectiveDate = new Date()) {
  // Input validation (optional)
  // You can add checks here to ensure basicSalary and benefits are positive numbers

  // Calculate gross salary by summing basic salary and benefits
  const grossSalary = basicSalary + benefits;

  // Define tax year based on effective date
  const taxYear = effectiveDate.getFullYear();

  // Define PAYE brackets (replace with actual bracket values for your country)
  const PAYEBranckets = [
      { max: 24000, rate: 0.1 },  // Up to 24,000
      // Add remaining brackets based on tax year (logic explained below)
  ];

  // Function to determine PAYE bracket based on tax year
  function getPAYEBasket(taxYear) {
      if (taxYear >= 2023) {
          // Use brackets for 2023 and above
          return PAYEBranckets;
      } else {
          // Use brackets for before 2023 (replace with actual brackets)
          return [
              { max: 24000, rate: 0.1 },
              { max: Infinity, rate: 0.3 },  // Assuming single bracket for above 24,000 before 2023
          ];
      }
  }

  // Get applicable PAYE brackets
  const applicableBrackets = getPAYEBasket(taxYear);

  // Calculate PAYE
  let taxablePay = grossSalary;
  let payee = 0;
  for (const bracket of applicableBrackets) {
      const bracketAmount = Math.min(taxablePay, bracket.max);
      payee += bracketAmount * bracket.rate;
      taxablePay -= bracketAmount;
      if (taxablePay <= 0) {
          break;  // Exit loop if taxable pay is exhausted
      }
  }

  // Define constants for NHIF, NSSF rates, and other deductions
  const NHIFRate = 0.05;  // Replace with actual NHIF rate
  const NSSFEmployeeRate = 0.06;  // Tier I and Tier II combined employee rate (replace if needed)
  const NSSFEmployerRate = 0.06;  // Replace with actual NHIF rate (employer contribution)
  const personalRelief = 2400;  // Monthly personal relief
  const insuranceRelief = 5000;  // Monthly insurance relief

  // Calculate deductions
  const NHIFDeductions = Math.min(grossSalary, 100000) * NHIFRate;  // Capped at 100,000 KES
  const NSSFEmployeeDeductions = Math.min(
      grossSalary - personalRelief,
      taxYear >= 2024 ? 7000 : 6000
  ) * NSSFEmployeeRate;
  const totalDeductions = payee + NHIFDeductions + NSSFEmployeeDeductions + insuranceRelief;

  // Calculate net salary by subtracting total deductions from gross salary
  const netSalary = grossSalary - totalDeductions;

  // Return an object with all the calculated values
  return {
      grossSalary,
      payee,
      NHIFDeductions,
      NSSFEmployeeDeductions,
      NSSFEmployerDeductions: grossSalary * NSSFEmployerRate,  // Assuming employer pays same rate
      totalDeductions,
      netSalary,
  };
}

// Prompt the user to enter basic salary in KES
readline.question("Enter basic salary (KES): ", (basicSalaryString) => {
  const basicSalary = parseFloat(basicSalaryString);  // Convert user input to a floating-point number

  // Prompt the user to enter benefits in KES
  readline.question("Enter benefits (KES): ", (benefitsString) => {
      const benefits = parseFloat(benefitsString);  // Convert user input to a floating-point number

      // Call the calculateNetSalary function with the provided basic salary and benefits
      const employeeInfo = calculateNetSalary(basicSalary, benefits);

      // Output the calculated salary information to the console
      console.log("Gross Salary:", employeeInfo.grossSalary);
      console.log("Payee (Tax):", employeeInfo.payee);
      console.log("NHIF Deductions:", employeeInfo.NHIFDeductions);
      console.log("NSSF Employee Deductions:", employeeInfo.NSSFEmployeeDeductions);
      console.log("NSSF Employer Deductions:", employeeInfo.NSSFEmployerDeductions);
      console.log("Total Deductions:", employeeInfo.totalDeductions);
      console.log("Net Salary: ", employeeInfo.netSalary);

      readline.close(); // Close the readline interface
  });
});