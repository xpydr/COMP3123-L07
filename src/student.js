import React from "react";
import PropTypes from 'prop-types';

class Student extends React.Component {
    static defaultProps = {
        sid: "",
        fnm: "",
        lnm: "",
        school: "",
        city: "",
    }

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <>
                <h2>Welcome to Fullstack Development - I</h2>
                <h3>React JS Programming Week09 Lab exercise</h3>
                <p>{this.props.sid}</p>
                <p>{this.props.fnm} {this.props.lnm}</p>
                <p>{this.props.school}, {this.props.city}</p>
            </>
        )
    }
}

Student.propTypes = {
    sid: PropTypes.number,
    fnm: PropTypes.string.isRequired,
    lnm: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    city: PropTypes.string
}

export default Student