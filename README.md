**Demerit Points Calculator
Description**
This JavaScript program calculates the demerit points for a vehicle based on its speed. It takes into account a speed limit of 70 km/h and awards demerit points at a rate of 1 point for every 5 km/h over the speed limit, up to a maximum of 12 points. If the demerit points exceed 12, the license is suspended.

Usage
Run the program by executing the JavaScript code in a Node.js environment or a web browser.
Enter your vehicle speed when prompted.
The program will output the demerit points or a message indicating that your license is suspended.
Speed Limit
The program uses a speed limit of 70 km/h.

Demerit Points System
1 point for every 5 km/h over the speed limit, up to a maximum of 12 points.
If the demerit points exceed 12, the license is suspended.
Example Output
Enter your vehicle speed: 90
Your points: 4
Enter your vehicle speed: 120
License Suspended
Code
The code is written in JavaScript and uses the prompt function to interact with the user. It consists of a single function calculateDemeritPoints that calculates the demerit points based on the input speed.

Note
This program is for demonstration purposes only and should not be used for actual demerit point calculations. The demerit points system may vary depending on the country or region.

License
This program is licensed under the MIT License. See the LICENSE file for details.



Payroll Calculator
Description
This program is a payroll calculator that calculates the net salary of an employee based on their basic salary, benefits, and deductions. It takes into account the tax rates set by the Kenya Revenue Authority (KRA), National Hospital Insurance Fund (NHIF) rates, and National Social Security Fund (NSSF) rates.

Usage
Run the program by executing the JavaScript code in a Node.js environment.
Enter your basic salary when prompted.
Enter your total allowances (benefits) when prompted.
The program will output the net salary after calculating the tax, NHIF deductions, and NSSF deductions.
Tax Rates
The program uses the following KRA tax rates:

0% on income up to 24,000 KES
10% on income between 24,001 KES and 32,333 KES
25% on income between 32,334 KES and 500,000 KES
30% on income between 500,001 KES and 800,000 KES
32.5% on income above 800,000 KES
NHIF Rates
The program uses the following NHIF rates:

0 KES on income up to 5,999 KES
150 KES on income between 6,000 KES and 7,999 KES
300 KES on income between 8,000 KES and 11,999 KES
...
1,700 KES on income above 99,999 KES
NSSF Rate
The program uses a fixed NSSF rate of 6% of the basic salary.

Example Output
Enter your basic salary: 50,000
Enter your total Allowances: 10,000 The net salary for a Gross Salary of 60,000 is 43,450
Code
The code is written in JavaScript and uses a prompt-sync library to interact with the user. It consists of several functions to calculate the gross salary, tax, NHIF deductions, NSSF deductions, and net salary.






