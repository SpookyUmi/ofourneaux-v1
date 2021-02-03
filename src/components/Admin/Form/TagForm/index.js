/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import bin from 'src/assets/icons/delete.svg';
import './tagform.scss';

const TagForm = ({
  tags, tagField, updateTagField, addNewTag, deleteTag,
}) => (

  <div className="tag__form">
    <form onSubmit={addNewTag}>
      <input
        className="tag__form__add__field"
        type="text"
        value={tagField}
        onChange={updateTagField}
        placeholder="Nouveau Label"
      />
      <input className="tag__form__add__submit" type="submit" value="Valider" />
    </form>

    <div className="tag__form__tags__list">
      {tags.map((tag) => (
        <div className="tag__form__tag" key={tag.id}>
          {tag.name}
          <img className="tag__form__delete__icon" src={bin} id={tag.id} alt="bin" onClick={deleteTag} />
        </div>
      ))}
    </div>

  </div>
);

TagForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  tagField: PropTypes.string.isRequired,
  updateTagField: PropTypes.func.isRequired,
  addNewTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tags: state.app.tags,
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
      payload: {
        name: event.target[0].value,
      },
    });
    dispatch({
      type: 'UPDATE_TAG_FIELD',
      payload: {
        tagField: '',
      },
    });
  },
  deleteTag: (event) => {
    dispatch({
      type: 'DELETE_TAG',
      payload: {
        id: event.target.id,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TagForm);
