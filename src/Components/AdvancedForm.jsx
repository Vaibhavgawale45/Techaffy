import React, { useState } from 'react';
import Select from 'react-select';


const options = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Alaska', label: 'Alaska' },
  { value: 'California', label: 'California' },
  { value: 'Delaware', label: 'Delaware' },
  { value: 'Tennessee', label: 'Tennessee' },
  { value: 'Texas', label: 'Texas' },
  { value: 'Washington', label: 'Washington' },
];


const AdvancedForm = () => {

  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [selectedOptions3, setSelectedOptions3] = useState([]);

  const handleChange1 = (selected) => {
    setSelectedOptions1(selected);
     console.log(selected);
  };

  const handleChange2 =(selected) =>{
    setSelectedOptions2(selected);
    console.log(selected);
  }
  const handleChange3 =(selected) =>{
    setSelectedOptions3(selected);
    console.log(selected);
  }

  return (
    <div>
      {/* <!-- SELECT2 EXAMPLE --> */}
        <div className="card card-default">
          <div className="card-header">
            <h3 class="card-title">Select2 (Default Theme)</h3>

            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus"></i>
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Minimal</label>
                  <select className="form-control select2" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* <!-- /.form-group --> */}
                <div className="form-group">
                  <label>Disabled</label>
                  <select className="form-control select2" disabled="disabled" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* <!-- /.form-group --> */}
              </div>
              {/* <!-- /.col --> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Multiple</label>
                  <Select
                     isMulti
                     value={selectedOptions1}
                     onChange={handleChange1}
                     options={options}
                     placeholder="Select a State"
                     class="select2"
                     style={{width: '100%'}}
                     isSearchable
                     noOptionsMessage={()=> "No results found"}
                   />
                  
                </div>
                {/* <!-- /.form-group --> */}
                <div className="form-group">
                  <label>Disabled Result</label>
                  <select className="form-control select2" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option disabled="disabled">California (disabled)</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* <!-- /.form-group --> */}
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}

            <h5>Custom Color Variants</h5>
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Minimal (.select2-danger)</label>
                  <select className="form-control select2 select2-danger" data-dropdown-css-class="select2-danger" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* <!-- /.form-group --> */}
              </div>
              {/* <!-- /.col --> */}
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Multiple (.select2-purple)</label>
                  <div className="select2-purple">
                    {/* <select className="select2" multiple="multiple" data-placeholder="Select a State" data-dropdown-css-class="select2-purple" style={{width: '100%'}}> */}
                    <Select
                       isMulti
                       value={selectedOptions2}
                       onChange={handleChange2}
                       options={options}
                       placeholder="Select a State"
                       className="select2"
                       styles={{ width: '100%' }}
                       isSearchable
                       noOptionsMessage={()=> "No results found"}
                      />
                    {/* </select> */}
                  </div>
                </div>
                {/* <!-- /.form-group --> */}
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.card-body --> */}
          <div className="card-footer">
            Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
            the plugin.
          </div>
        </div>
        {/* <!-- /.card --> */}

        {/* <!-- SELECT2 EXAMPLE --> */}
        <div className="card card-default">
          <div className="card-header">
            <h3 className="card-title">Select2 (Bootstrap4 Theme)</h3>

            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus"></i>
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Minimal</label>
                  <select className="form-control select2bs4" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* <!-- /.form-group --> */}
                <div className="form-group">
                  <label>Disabled</label>
                  <select className="form-control select2bs4" disabled="disabled" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* <!-- /.form-group --> */}
              </div>
              {/* <!-- /.col --> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Multiple</label>
                  <Select
                       isMulti
                       value={selectedOptions3}
                       onChange={handleChange3}
                       options={options}
                       placeholder="Select a State"
                       className="select2bs4"
                       styles={{ width: '100%'}}
                       isSearchable
                       noOptionsMessage={()=> "No results found"}
                      />
                </div>
                {/* <!-- /.form-group --> */}
                <div className="form-group">
                  <label>Disabled Result</label>
                  <select className="form-control select2bs4" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option disabled="disabled">California (disabled)</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                {/* <!-- /.form-group --> */}
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.card-body --> */}
          <div class="card-footer">
            Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
            the plugin.
          </div>
        </div>
        {/* <!-- /.card --> */}
      
    </div>
  )
}

export default AdvancedForm
