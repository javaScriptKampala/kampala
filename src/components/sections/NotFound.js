import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
    ...SectionProps.types
  }
  
  const defaultProps = {
    ...SectionProps.defaults
  }

  const NotFound = ({
    className,
    ...props
    }) => {
        return (
            <div>
                <div className={classNames('container spacer-48', className)} {...props}>
                    <div className="row">
                        <div className="col-12">
                            <h1>404</h1>
                            <h2>We don't have this page yet.</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    NotFound.propTypes = propTypes;
    NotFound.defaultProps = defaultProps;

    export default NotFound;