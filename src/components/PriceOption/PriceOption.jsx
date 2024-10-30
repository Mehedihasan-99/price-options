import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({option}) => {
    const { name, price, features} = option
    return (
        <div className="p-6 flex flex-col bg-blue-500 text-white 
        rounded-xl">
            <h2 >
                <span className="text-7xl font-bold">{price}</span>
                <span  className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl mb-3">{name}</h4>
            <div className="flex-grow text-left text-sm mb-10">
            {
                features.map((feature, index) =><Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className="bg-green-500 hover:bg-green-700 py-2 w-full rounded-lg">Click Me</button>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
}
export default PriceOption;