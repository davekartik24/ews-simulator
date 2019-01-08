CHANGELOG
---------

## 4.3.11
* **Change** OrderLVT generation in orderRegistration is now deterministic based on given CVV

## 4.3.6
* **Change** Instead of last three digits of PAN last three but one is considered to set the TokenNewlyGeneratedFlag
* **Change** Instead of last digit to calculate the Wallet properties the second last digit is used
* **Change** Instead of last three digits to get the error, last three but one is considered
* **Change** Instead of last three digits to get the CVV from token, last three but one is considered
* **Change** Instead of last three digits to get the different error response from merchantRefId, last three but one is considered

## 4.3.3
* **BugFix** Fix Invalid default expiration date in Detokenize and DeRegistration
* **BugFix** Fix Invalid length of Routing Number in EcheckDetokenizeResponse.

## 4.3.2
* **BugFix** Fix serverFault on soap header validation errors.

## 4.3.1
* **Feature** Endpoint configurable by -Dendpoint argument
* **BugFix** Header validation optimizations

## 4.3.0
* **Feature** Support for EWS API 4.3.0
