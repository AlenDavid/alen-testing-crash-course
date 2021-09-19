# End-to-end testing

by David Alen.

## Introduction

This repository was created with the intuit of explaining how to do the testing pyramid in javascript/typescript applications.

## Features

Below we have a list of available features we want our software to have:

### Authentication features

- As an user,
- When I create my account
- I expect to be mailed with url to activate it.

- As an user,
- When I login into application
- I expect to get an bearer token and a refresher token.

- As an user,
- When I logout from application
- I expect my token to be invalid.

- As an user,
- When I flush my tokens,
- I expect all tokens to be invalid.

- As an user,
- When I reset my password,
- I expected all tokens to be invalid,
- And a confirmation

### Finances features

- As an user,
- I expect to be able to manage my cards,
- to set which card is default and
- to set the card type.

- As an user,
- I expect to be able to manage my expenses and
- to select which card made the expense.

- As an user,
- I can only see my cards and my expenses.
