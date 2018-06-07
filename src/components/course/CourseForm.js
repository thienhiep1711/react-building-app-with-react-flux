import React, { Component, PropTypes } from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';


const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {

  return (
    <form>
      <h1>Manage Form</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="authorId"
        label="Authour"
        value={course.authorId}
        defaultOption="Select Authour"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}
      />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
      />
      <input
        type="submit"
        disabled={saving}
        value={saving? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors : PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
