import React, {useState} from 'react';
import Joi from 'joi-browser';

const Login = (props) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

   const schema = {
        email: Joi.string().required(),
        password: Joi.string().required()
    }

    function validateForm(e) {
        e.preventDefault();
        console.log('inside Login Validate form');
        const result = Joi.validate(user, 
            schema, {abortEarly: false})
        console.log(result);
        const {error} = result;
        if (!error) {
            return null;
        } 
        else {
            const errorData = {};
            for(let item of error.details){
                const name = item.path[0];
                const message = item.message;
                errorData[name] = message;
            }
            setErrors(errorData);
            return errorData;
        }
    }

    function handleSave(e) {
        console.log('handleSave');
        const {name, value} = e.target;
        let errorData = {...errors};
        const errorMsg = validateProperty(e);
        console.log(errorMsg); 
        if(errorMsg) {
            errorData[name] = errorMsg;
        }
        else{
            delete errorData[name];
        }
        //clone
        let userData = {...user};
        //edit
        userData[name] = value;
        //setState
        setUser(userData);
        setErrors(errorData);
    }

    const validateProperty = (e) => {
        const {name, value} = e.target;
        const obj = {[name]: value};
        const subSchema = {[name]: schema[name]};
        const result = Joi.validate(obj, subSchema);
        const {error} = result;
        return error ? error.details[0].message : null;
    };

    return ( 
        <React.Fragment>
            <form>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                type="email" 
                name='email'
                value={user.email}
                onChange={handleSave}
                className="form-control" 
                id="email" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                {errors.email && (
                    <div className="alert alert-danger">{errors.email}</div>
                )
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                name='password'
                value={user.password} 
                onChange={handleSave}
                // onChange={(e) => setUser(e.target.value)}
                className="form-control" 
                id="password" 
                placeholder="Password" />
                {errors.password && (
                    <div className="alert alert-danger">{errors.password}</div>
                )}
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" onClick={validateForm} className="btn btn-primary">Submit</button>
            </form> 
        </React.Fragment>
     );
}
 
export default Login;