import React, { Component } from "react";

class FormMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pesanan: "",
      Jumlah: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeJumlah = this.handleChangeJumlah.bind(this);
    this.Pesanan = React.createRef();
  }
  handleChange(e) {
    this.setState({ Pesanan: e.target.value });
  }
  handleChangeJumlah(e) {
    this.setState({ Jumlah: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(
      "Pesanan Anda Adalah :   " +
        this.state.Pesanan +
        "      |     " +
        "Jumlah Pesanan :   " +
        this.state.Jumlah
    );
    this.setState({ Pesanan: "", Jumlah: "" });
    this.Pesanan.current.focus();
  }
  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.Pesanan}
              ref={this.Pesanan}
              placeholder="Masukkan Pesanan Anda"
            />
            <input
              type="number"
              value={this.state.Jumlah}
              onChange={this.handleChangeJumlah}
              placeholder="Masukkan Jumlah Pesanan Anda"
            />
            <br />
            <br />
            <input type="submit" value="Pesan" />
          </form>
        </center>
      </div>
    );
  }
}

export default FormMakanan;
