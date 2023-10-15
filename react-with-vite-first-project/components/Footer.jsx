import PropTypes from 'prop-types'
export default function Footer(props) {
    const {className} = props
    return (
        <footer className={className}>
            <p className="text-4xl text-white">Footer</p>
        </footer>
    );
}

Footer.propTypes = {
    className: PropTypes.string.isRequired
}