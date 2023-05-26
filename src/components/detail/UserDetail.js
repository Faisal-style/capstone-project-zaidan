import React, { useState } from "react";
import { FaStar, FaEdit } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import State from "../../hooks/State";

function UserDetail({
  id,
  fullName,
  phoneNumber,
  img,
  kecamatan,
  kelurahan,
  kota,
  provinsi,
  rating,
  address,
  priceRate,
  keahlian,
  id_role,
  toggleUpdate,
  isUpdate,
  changeImage,
  updateProfile,
}) {
  const [formFullName, setFullName] = State(fullName);
  const [formPhoneNumber, setPhoneNumber] = State(phoneNumber);
  const [formAdress, setAddress] = State(address);
  const [formKelurahan, setKelurahan] = State(kelurahan);
  const [formKecamatan, setKecamatan] = State(kecamatan);
  const [formKota, setKota] = State(kota);
  const [formProvinsi, setProvinsi] = State(provinsi);
  const [formPriceRate, setPriceRate] = State(priceRate);
  const [formKeahlian, setKeahlian] = State(keahlian);
  const [image, setImage] = useState("");

  function handlerImage(e) {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }

  function submitImage(event) {
    event.preventDefault();
    console.log(image);
    changeImage({ image });
  }

  function submitProfile(event) {
    event.preventDefault();
    updateProfile({
      fullName: formFullName,
      phoneNumber: formPhoneNumber,
      address: formAdress,
      kelurahan: formKelurahan,
      kecamatan: formKecamatan,
      kota: formKota,
      provinsi: formProvinsi,
      priceRate: formPriceRate,
      keahlian: formKeahlian,
    });
  }

  return (
    <div className="userProfile-detail card">
      <div className="card-header">
        <img
          src={
            img
              ? img
              : "https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png"
          }
          alt={fullName}
        ></img>
        <form onSubmit={submitImage}>
          <input
            type="file"
            name="image-profile"
            accept="image/*"
            onChange={handlerImage}
          />
          <button type="submit" className="btn btn-success">
            Change image
          </button>
        </form>
      </div>

      <div className="card-body">
        <h1 className="mb-4 text-center">User Biodata</h1>
        {id_role === 1 ? (
          <h3 className="mb-3">
            Rating {rating}{" "}
            {[
              Array(rating)
                .fill()
                .map(() => {
                  return (
                    <FaStar
                      size={24}
                      key={uuidv4()}
                      style={{ color: "gold" }}
                    />
                  );
                }),
            ]}
          </h3>
        ) : (
          ""
        )}
        <div className="biodata">
          {isUpdate === false ? (
            <table className="table-biodata">
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>:</td>
                  <td>{fullName}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>:</td>
                  <td>{phoneNumber}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>{address}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-uppercase">
                    {kecamatan}, {kelurahan}, {kota}, {provinsi}
                  </td>
                </tr>
                {id_role === 1 ? (
                  <>
                    <tr>
                      <td>Price Rate</td>
                      <td>:</td>
                      <td>{priceRate}</td>
                    </tr>
                    <tr>
                      <td>keahlian</td>
                      <td>:</td>
                      <td>{keahlian}</td>
                    </tr>
                  </>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          ) : (
            <form onSubmit={submitProfile}>
              <table>
                <tbody>
                  <tr>
                    <td>Full Name</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        value={formFullName}
                        onChange={setFullName}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        value={formPhoneNumber}
                        onChange={setPhoneNumber}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="Address"
                        value={formAdress}
                        onChange={setAddress}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Ward (kelurahan)</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="kelurahan"
                        value={formKelurahan}
                        onChange={setKelurahan}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Subdistrict (kecamatan)</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="kecamatan"
                        value={formKecamatan}
                        onChange={setKecamatan}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>City (kota)</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="kota"
                        value={formKota}
                        onChange={setKota}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Province (provinsi)</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="provinsi"
                        value={formProvinsi}
                        onChange={setProvinsi}
                      />
                    </td>
                  </tr>
                  {id_role === 1 ? (
                    <>
                      <tr>
                        <td>Price Rate</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            name="priceRate"
                            value={formPriceRate}
                            onChange={setPriceRate}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>keahlian</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            name="keahlian"
                            value={formKeahlian}
                            onChange={setKeahlian}
                          />
                        </td>
                      </tr>
                    </>
                  ) : (
                    ""
                  )}
                </tbody>
              </table>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mx-3">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => toggleUpdate(false)}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          <div
            className="edit-biodata"
            style={{ display: isUpdate ? "none" : "block" }}
          >
            <button className="btn" onClick={() => toggleUpdate(true)}>
              <FaEdit style={{ color: "black", width: "25", height: "25" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
