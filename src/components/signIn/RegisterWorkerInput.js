import React from "react";
import PropTypes from "prop-types";

class RegisterWorkerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      provinsi: "",
      kota: "",
      kecamatan: "",
      kelurahan: "",
      address: "",
    };

    this.onFullNameChange = this.onFullNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
    this.onProvinsiChange = this.onProvinsiChange.bind(this);
    this.onKotaChange = this.onKotaChange.bind(this);
    this.onKecamatanChange = this.onKecamatanChange.bind(this);
    this.onKelurahanChange = this.onKelurahanChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onFullNameChange(event) {
    this.setState(() => {
      return {
        fullName: event.target.value,
      };
    });
  }

  onEmailChange(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onPhoneNumberChange(event) {
    this.setState(() => {
      return {
        phoneNumber: event.target.value,
      };
    });
  }

  onProvinsiChange(event) {
    this.setState(() => {
      return {
        provinsi: event.target.value,
      };
    });
  }

  onKotaChange(event) {
    this.setState(() => {
      return {
        kota: event.target.value,
      };
    });
  }

  onKecamatanChange(event) {
    this.setState(() => {
      return {
        kecamatan: event.target.value,
      };
    });
  }

  onKelurahanChange(event) {
    this.setState(() => {
      return {
        kelurahan: event.target.value,
      };
    });
  }

  onAddressChange(event) {
    this.setState(() => {
      return {
        address: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.register({
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      provinsi: this.state.provinsi,
      kota: this.state.kota,
      kecamatan: this.state.kecamatan,
      kelurahan: this.state.kelurahan,
      rating: 5,
      id_role: 1,
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitHandler}>
        <div className="login-row mt-2">
          <input
            className="form-control my-4 mx-auto shadow-none border-0 border-bottom border-dark rounded-0 rounded-top"
            type="text"
            placeholder="Name"
            value={this.state.fullName}
            onChange={this.onFullNameChange}
          />
          <input
            className="form-control my-4 mx-auto shadow-none border-0 border-bottom border-dark rounded-0 rounded-top"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input
            className="form-control my-4 mx-auto shadow-none border-0 border-bottom border-dark rounded-0 rounded-top"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <input
            className="form-control mt-4 mb-5 mx-auto shadow-none border-0 border-bottom border-dark rounded-0 rounded-top"
            type="number"
            placeholder="Phone Number"
            value={this.state.phoneNumber}
            onChange={this.onPhoneNumberChange}
          />

          <input
            className="form-control mt-5 mb-4 mx-auto shadow-none border-0 border-bottom border-dark rounded-0 rounded-top"
            type="text"
            placeholder="Provinsi"
            value={this.state.provinsi}
            onChange={this.onProvinsiChange}
          />
          <input
            className="form-control my-4 mx-auto shadow-none border-0 border-bottom border-dark rounded-0 rounded-top"
            type="text"
            placeholder="Kota"
            value={this.state.kota}
            onChange={this.onKotaChange}
          />
          <input
            className="form-control my-4 mx-auto shadow-none border-0 border-bottom border-dark rounded-0 rounded-top"
            type="text"
            placeholder="Kecamatan"
            value={this.state.kecamatan}
            onChange={this.onKecamatanChange}
          />
          <input
            className="form-control my-4 mx-auto shadow-none border-0 border-bottom border-dark rounded-0 rounded-top"
            type="text"
            placeholder="Kelurahan"
            value={this.state.kelurahan}
            onChange={this.onKelurahanChange}
          />
          <input
            className="form-control my-4 mx-auto shadow-none border-0 border-bottom border-dark rounded-0 rounded-top"
            type="text"
            placeholder="address"
            value={this.state.address}
            onChange={this.onAddressChange}
          />
        </div>
        <button className="input-btn border-0 rounded-pill">Daftar</button>
      </form>
    );
  }
}

RegisterWorkerInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterWorkerInput;
