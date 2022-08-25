import "./App.css";
import React, { useEffect, useState } from "react";

const validEmailRegex = RegExp(
/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => { let valid = true;
Object.values(errors).forEach(val => val.length > 0 && (valid = false)); return valid;
};
export default class App extends React.Component { constructor(props) {
super(props); this.state = { fullName: null,
email: null, feedback: null, errors: { fullName: '',
email: '',
feedback: '',
}
};
}

handleChange = (event) => { event.preventDefault();
const { name, value } = event.target; let errors = this.state.errors;

switch (name) { case 'fullName':
errors.fullName = value.length < 5
? 'Full Name must be at least 5 characters long!'
: '';
break; case 'email':
errors.email = validEmailRegex.test(value)
? ''
: 'Email is not valid!'; break;
case 'feedback':
errors.feedback = value.length > 150
? 'feedback must not be more than 150 characters long!'
: '';
break; default: break;
}

this.setState({errors, [name]: value});
}

handleSubmit = (event) => { event.preventDefault(); if(validateForm(this.state.errors)) { console.info('Valid Form')
}else{
 
console.error('Invalid Form')
}
}
handleClick = () => { this.setState({send: true})
}

render() {
const {errors} = this.state; return (
<div className="wrapper">
<div className="form-wrapper">
<h2>Feedback Form</h2>
<form onSubmit={this.handleSubmit} noValidate>
<div className="fullName">
<label htmlFor="enrollemntid">Enrollemnt ID</label>
<input type="text"
name="enrollemntid" onChange={this.handleChange} noValidate
/>
</div>
<div className="fullName">
<label htmlFor="fullName">Full Name</label>
<input type="text"
name="fullName" onChange={this.handleChange} noValidate/>
{errors.fullName.length > 0 && (
<span className="error">{errors.fullName}</span>
)}
</div>
<div className="email">
<label htmlFor="email">Email</label>
<input type="email" name="email"
onChange={this.handleChange} noValidate
/>
{errors.email.length > 0 && (
<span className="error">{errors.email}</span>
)}
</div>
<div className="fullName">
<label htmlFor="rating">Select Facility</label>

<select>
<option value="Classrooms">Classrooms</option>
 
<option value="labs">Laboratories</option>
<option value="hostel">Hostels</option>
<option value="transport"> Transportation Facilities
</option>
<option selected value="Sports facility"> Sports Facilities
</option>
</select>
</div>
<div className="fullName">
<label htmlFor="rating">Select Rating</label>

<select>
<option value="Excellent">Excellent😍</option>
<option value="Very Good">Very Good😍</option>
<option value="Average">Average😍</option>
<option value="Poor"> Poor😍
</option>
<option value="Very Poor">Very Poor😍</option>
</select>
</div>
<div className="feedback">
<label htmlFor="feedback">Review/Comments</label>
<input type="feedback" name="feedback"
onChange={this.handleChange} noValidate
/>
{errors.feedback.length > 0 && (
<span className="error">{errors.feedback}</span>
)}
</div>
<div className="submit">

<button>Submit</button> submit={this.handleSubmit}

</div>
</form>
</div>
<div className="footer">
<h5>Copyrights Reserved &copy; Jiya Shah (20CS083)</h5>
</div>
</div>
);
}
}
