# quickCredit

[![Build Status](https://travis-ci.org/kessyy/quickCredit1.svg?branch=develop)](https://travis-ci.org/kessyy/quickCredit1)
[![Coverage Status](https://coveralls.io/repos/github/kessyy/quickCredit1/badge.svg?branch=develop)](https://coveralls.io/github/kessyy/quickCredit1?branch=develop)

Quick Credit is an online lending platform that provides short term 
soft loans to individuals. This helps solve problems of financial inclusion as a 
way to alleviate poverty and empower low income earners 
<br><br>
<strong>Motivation</strong><br>
We live in a world where money is not always available but our needs never go on a standby.
 Whether you have money or not you still need the basic neccesities of life such as Shelter, food
  which are all achieved by money. QuickCredit was created to help our clients to keep pushing through life even when money decreases. That is why we provide even the smallest of loans 
  in the fastest time. 
<br><br>
This site is published at https://kessyy.github.io/quickCredit/UI/index.html
<br><br>
<strong>Features</strong><br>
<ul>
<li>A user can sign up</li>
<li>A user can log in</li>
<li>A client can request for only one loan at a time</li>
<li>A client can view loan repayment history</li>
<li>Admin can mark as verified and view a specific loan</li>
<li>Admin can approve clients loan application</li>
<li>Admin can view all repaid loans</li>
</ul>
<br><br>
<strong>API endpoints</strong>
<ul>
<li>User sign in and validation</li>
<li>User sign up and validation</li>
<li>User can apply for a loan</li>
<li>User can view loan history</li>
<li>admin can view all loans</li>
<li>Admin can view current loans(not fully repaid)</li>
<li>Admin can view specific loan</li>
<li>Admin can view all repaid loans</li>
</ul>
<br><br>
<strong>Installation</strong><br>
Git clone this project https://github.com/kessyy/quickCredit1.git <br>
Download and install node_js<br>
In terminal run npm install
<br>

<strong>APIs</strong>
<table>
<tr>
<th>HTTP METHOD</th>
<th>ENDPOINTS</th>
<th>DESCRIPTION</th>
</tr>
<tr>
<td>Post</td>
<td>/api/v1/auth/signup</td>
<td>User can create account</td>
</tr>
<tr>
<td>Post</td>
<td>/api/v1/auth/signin</td>
<td>User can log in</td>
</tr>
<tr>
<td>Get</td>
<td>/api/v1/loans</td>
<td>User can view repayment history</td>
</tr>
<tr>
<td>Post</td>
<td>/api/v1/loans</td>
<td>User can create new loan</td>
</tr>
<tr>
<td>Get</td>
<td>/api/v1/loan/:id</td>
<td>Admin can view a specific loan</td>
</tr>
<tr>
<td>Get</td>
<td>/api/v1/users</td>
<td>Admin can view all loans</td>
</tr>
<tr>
<td>Get</td>
<td>/api/v1/loans/paid</td>
<td>Admin can view all paid loans</td>
</tr>
<tr>
<td>Get</td>
<td>/api/v1/loans/unpaid</td>
<td>Admin can view all unpaid loans</td>
</tr>
<tr>
<td>Get</td>
<td>/api/v1/loans/halfpay</td>
<td>Admin can view all loans not fully paid</td>
</tr>
</table>
<br>
<strong>Credit</strong><br>
https://medium.freecodecamp.org/data-structures-101-linked-lists-254c82cf5883 <br>
https://medium.com/front-end-weekly/data-structures-linked-list-implementation-in-js-3beb48ff49cd <br>
https://www.codementor.io/olawalealadeusi896/building-simple-api-with-es6-krn8xx3k6 <br> 

