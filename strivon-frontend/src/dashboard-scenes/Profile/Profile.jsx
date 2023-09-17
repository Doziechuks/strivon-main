import styles from "./profile.module.css";
import { userdata } from "./userdata";
import { MdAddAPhoto } from "react-icons/md";
import CustomInput from "../../utils/customInput/CustomInput";

const Profile = () => {
  const { firstName, lastName, email, gender, studentId, coursePlan } =
    userdata;
  const firstNameCap = firstName?.charAt(0).toUpperCase() + firstName?.slice(1),
    lastNameCap = lastName?.charAt(0).toUpperCase() + lastName?.slice(1),
    initials = firstNameCap.charAt(0) + lastNameCap.charAt(0);

  return (
    <div className={styles.profile}>
      <section className={styles.wrapper}>
        <div className={styles.heading}>
          <h2>Personal Information</h2>
          <article>
            <p>Student ID: {studentId}</p>
            <br />
            <p>Course plan: {coursePlan}</p>
          </article>
        </div>

        <div className={styles.profileimagewrap}>
          <div className={styles.usericon}>
            <object type="image/jpeg" data="">
              {initials ? '' : 'initials'}
            </object>
            <p>{initials}</p>
          </div>
          <p className={styles.add}>
            <MdAddAPhoto /> Add photo
          </p>
        </div>
        <div className={styles.formwrap}>
          <form>
            <CustomInput
              type="text"
              label="First Name"
              value={firstName}
              required
            />
            <CustomInput
              type="text"
              label="Last Name"
              value={lastName}
              required
            />
            <CustomInput type="email" label="Email" value={email} required />
            <div className={styles.formgroup}>
              <label htmlFor="">Gender</label>
              <select name="gender" id="">
                <option value={gender}>{gender}</option>
                <option value="female">female</option>
              </select>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Profile;
