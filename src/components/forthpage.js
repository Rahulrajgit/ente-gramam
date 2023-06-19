import React from "react";
import "../styles.css/Css.css";

const Forthpage = () => {
    return (
        <div>
            <header className="forth">
                <h1>complaint Registration</h1>
            </header>
            <div className="container">
                <p>Complaint Details</p>
            </div>
            <div className="button" align="right">
                <button type="button" class="btn btn-danger">
                    Back
                </button>

                <a href="#">
                    <button type="button" class="btn btn-primary">
                        Register
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Forthpage;