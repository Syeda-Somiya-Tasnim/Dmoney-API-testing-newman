# <div align="center">Dmoney-Finance API Testing by Postman & Newman</div>

## Test Scenarios:
1. Admin creates an Agent, 2 random Customers, and a Merchant.
   - Admin email: `admin@roadtocareer.net`
   - Admin password: `1234`

2. Deposit some money from the SYSTEM account to the Agent.
   - System account: `SYSTEM`
   - Amount range: 10 TK to 10,000 TK

3. Agent deposits money to one of the Customers.
   - Hint: `fromAc: Agent`, `toAc: Customer`

4. Check the Agent's balance.

5. Send money from one Customer to another Customer.
   - Hint: `fromAc: Customer`, `toAc: Customer`

6. Withdraw any amount from a Customer to the Agent.
   - Amount range: 10 TK to 10,000 TK
   - Hint: `fromAc: Customer`, `toAc: Agent`

7. Check the Customer's balance and transaction statement by `trnxId`.

8. Make a payment from the second Customer to the Merchant.

9. The second Customer checks both balance and transaction statement.

10. The Merchant checks their balance.

## Tools & Technology Used:
- `Postman`
- `Newman`

## Prerequisites:
- `Node.js`

## How to Run This Project:
```bash
# Clone this project
git clone https://github.com/your-repo/dmoney-users-transaction-automation.git
cd dmoney-users-transaction-automation

# Install dependencies
npm install

# Run the additional script
node ./report.js

# Run the tests
npm test

```

## dmoney-users-transaction-automation API documentation:
https://www.postman.com/docking-module-observer-59434393/workspace/dmoney-web-vercel-app/collection/33669534-b8a85c56-6762-428a-9ecc-8c546f541712?action=share&creator=33669534

## Test Report:
![Dmoney HTML Newman report](https://github.com/user-attachments/assets/b712fb02-96b0-46bc-aa80-1008853cddce)

## Test Cases:
https://docs.google.com/spreadsheets/d/1nEMeWehsfscu54RjdMSjMBXKCEEdfFoh/edit?usp=sharing&ouid=117120284960221469947&rtpof=true&sd=true

## Bug Report:
https://docs.google.com/spreadsheets/d/1o-OHOlATgoeFyR5x0bO2W-hR3kBlf4gV/edit?usp=sharing&ouid=110323449897405226902&rtpof=true&sd=true

