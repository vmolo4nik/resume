import React, {Component} from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import site from '../../site.jpg'

class Project extends Component {
    render () {
        return (
        	<div className="Project">
                <div className="ldt-fade-in">
                    <h1><b>Project</b></h1>
                    <hr/>
                    <div className="flex">
                        <figure class="snip1477">
                            <img src={site}/>

                            <div class="title">
                                <div>
                                    <h2>Дизайн</h2>
                                    <h4>Студия</h4>
                                </div>
                            </div>

                            <figcaption>
                                <p>Рита Зимина</p>
                            </figcaption>

                            <a href="http://rita-zimina.000webhostapp.com"></a>
                        </figure>

                        <figure class="snip1477">
                            <img className="fit" src="https://images.unsplash.com/photo-1481930703900-9007d48152b1?ixlib=rb-0.3.5&s=3f971572d828782017ef2a14d4dafb42&auto=format&fit=crop&w=1372&q=80"/>

                            <div class="title">
                                <div>
                                    <h2>HAND</h2>
                                    <h4>MADE</h4>
                                </div>
                            </div>

                            <a href="https://hand-made-bymaxim.000webhostapp.com"></a>
                        </figure>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project