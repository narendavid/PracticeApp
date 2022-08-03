import React from 'react';

const Form = () => {
    return (
        <form>
            <h2>Bienvenidos!</h2>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div class="form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;