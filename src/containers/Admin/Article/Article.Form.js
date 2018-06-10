import React, { Component } from 'react';

class ArticleForm extends Component {

    render() {
        return (
            <div className="form-block">
                <div className="content-header clearfix col-md-12" >
                    <h1 className="col-md-6">
                        Bài viết
                    </h1>
                    <ol className="breadcrumb pull-right">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Tables</a></li>
                        <li className="active">Simple</li>
                    </ol>
                </div>
                <h1 className="col-md-12">Thêm mới bài viết</h1>
                <div className="col-md-8">
                    <input className="form-control" /><template></template>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="col-md-4">sdsds</div>
            </div>
        );
    }
}

export default ArticleForm;