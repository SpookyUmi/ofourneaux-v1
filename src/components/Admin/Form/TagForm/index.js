/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import pencil from 'src/assets/icons/modifier.svg';
import bin from 'src/assets/icons/delete.svg';
import 'src/components/Admin/admin.scss';

const TagForm = ({
  tags, tagField, updateTagField, addNewTag, deleteTag,
}) => (

  <div className="tag__form">
    <form onSubmit={addNewTag}>
      <p className="tag__form__p">Labels</p>
      <input
        className="tag__form__add__field"
        type="text"
        value={tagField}
        onChange={updateTagField}
        placeholder="Label"
      />
      <input className="tag__form__add__submit" type="submit" value="Valider" />
    </form>

    {tags.map((tag) => (
      <div key={tag}>
        <span>{tag}</span>
        {/* <button className="tag__form__edit__button" type="button">
            <img className="tag__form__edit__icon" href={pencil} alt="pencil" />
          </button> */}
        <button
          className="tag__form__delete__button"
          type="button"
          onClick={deleteTag(tag.id)}
        >
          <img className="tag__form__delete__icon" href={bin} alt="bin" />
        </button>
      </div>
    ))}

  </div>
);

TagForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  tagField: PropTypes.string.isRequired,
  updateTagField: PropTypes.func.isRequired,
  addNewTag: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tags: state.admin.tags,
  tagField: state.admin.tagField,
});

const mapDispatchToProps = (dispatch) => ({

  updateTagField: (event) => {
    dispatch({
      type: 'UPDATE_TAG_FIELD',
      payload: {
        tagField: event.target.value,
      },
    });
  },
  addNewTag: (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_TAG',
    });
  },
  deleteTag: (id) => {
    dispatch({
      type: 'DELETE_TAG',
      payload: {
        id,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TagForm);
