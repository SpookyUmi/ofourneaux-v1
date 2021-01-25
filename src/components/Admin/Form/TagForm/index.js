/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

// import pencil from 'src/assets/icons/modifier.svg';
import bin from 'src/assets/icons/delete.svg';
import 'src/components/Admin/admin.scss';

// TODO add props (controlled field, handlesubmit and props)
const TagForm = ({ tags }) => (

  <div className="tag__form">
    <form>
      <p className="tag__form__p">Labels</p>
      {tags.map((tag) => (
        <div key={tag}>
          <span>{tag}</span>
          {/* TODO handle onclick event to delete */}
          {/* <button className="tag__form__edit__button" type="button">
            <img className="tag__form__edit__icon" href={pencil} alt="pencil" />
          </button> */}
          <button className="tag__form__delete__button" type="button">
            <img className="tag__form__delete__icon" href={bin} alt="bin" />
          </button>
        </div>
      ))}
    </form>
  </div>
);

TagForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagForm;
