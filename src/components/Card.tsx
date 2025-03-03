import omelet from '../assets/image-omelette.jpeg'
export const Card = () => {
    return (
        <div className="bg-white shadow-md rounded-[24px] p-6 flex-md flex-col items-center justify-center">
            <img src={omelet} alt="Omelet" className='max-w-full h-auto object-cover block md:hidden p-0' />
            <div>

                <img src={omelet} alt="Omelet" className='rounded-[12px] w-[656px] max-w-full h-auto object-cover hidden md:block' />
                <h2 className="text-xl font-bold stone-900 TextPreset1 text-left mt-[40px] mb-[24px] px-7 md:px-0">Simple Omelette Recipe</h2>
                <p className="mt-2 stone-600 TextPreset4 mb-[32px] px-7 md:px-0">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                <div className='bg-[#FFF7FB] custom-padding-24 rounded-sm'>
                    <h2 className='rose-800 TextPreset3 mb-[24px] px-7 md:px-0' >Preparation time</h2>
                    <ul className='list-disc list-inside TextPreset4 stone-600 px-7 md:px-0'>
                        <li className='marker:text-[#7A284E] mb-1'><span className='TextPreset4-bold ml-4'>Total:</span> Approximately 10 minutes</li>
                        <li className='marker:text-[#7A284E] mb-1'><span className='TextPreset4-bold ml-4'>Preparation:</span> 5 minutes</li>
                        <li className='marker:text-[#7A284E]'><span className='TextPreset4-bold ml-4'>Cooking:</span> 5 minutes</li>
                    </ul>
                </div>

                <h2 className='brown-800 TextPreset2 mt-[32px] mb-[24px] px-7 md:px-0'>Ingredients</h2>
                <ul className='list-disc list-inside TextPreset4 stone-600 px-7 md:px-0'>
                    <li className='marker:text-[#854632] mb-1'>2-3 large eggs</li>
                    <li className='marker:text-[#854632] mb-1'>Salt, to taste</li>
                    <li className='marker:text-[#854632] mb-1'>Pepper, to taste</li>
                    <li className='marker:text-[#854632] mb-1'>1 tablespoon of butter or oil</li>
                    <li className='marker:text-[#854632] mb-1'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    <hr className='border-stone-200 border-b my-[32px] px-7'/>
                </ul>

                

                <h2 className='brown-800 TextPreset2 mt-[32px] mb-[24px] px-7 md:px-0'>Instructions</h2>
                <ol className='list-decimal list-inside TextPreset4 stone-600 px-7 md:px-0'>
                    <li className='marker:text-[#854632] marker:font-bold mb-3'><span className='TextPreset4-bold ml-3'>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
                    <li className='marker:text-[#854632] marker:font-bold mb-3'><span className='TextPreset4-bold ml-3'>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>
                    <li className='marker:text-[#854632] marker:font-bold mb-3'><span className='TextPreset4-bold ml-3'>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                    <li className='marker:text-[#854632] marker:font-bold mb-3'><span className='TextPreset4-bold ml-3'>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
                    <li className='marker:text-[#854632] marker:font-bold mb-3'><span className='TextPreset4-bold ml-3'>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
                    <li className='marker:text-[#854632] marker:font-bold mb-3'><span className='TextPreset4-bold ml-3'>Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
                    <hr className='border-stone-200 border-b my-[32px]'/>
                </ol>


                <h2 className='brown-800 TextPreset2 mt-[32px] mb-[24px] px-7 md:px-0'>Nutrition</h2>
                <p className="mt-2 stone-600 TextPreset4 mb-[32px] px-7 md:px-0">The table below shows nutritional values per serving without the additional fillings.</p>
                <table className='w-[656px] max-w-full h-auto mb-[20px]' >
                    <tbody>
                        <tr className='border-b border-stone-200 px-6'>
                            <td className='stone-600 TextPreset4 py-3 pl-6 pr-0'>Calories</td>
                            <td className='brown-800 font-bold TextPreset4-bold py-3 pr-6 pl-0'>277kcal</td>
                        </tr>
                        <tr className='border-b border-stone-200'>
                            <td className='stone-600 TextPreset4 py-3 pl-6 pr-0'>Carbs</td>
                            <td className='brown-800 font-bold TextPreset4-bold py-3 pr-6 pl-0'>0g</td>
                        </tr>
                        <tr className='border-b border-stone-200'>
                            <td className='stone-600 TextPreset4 py-3 pl-6 pr-0'>Protein</td>
                            <td className='brown-800 font-bold TextPreset4-bold py-3 pr-6 pl-0'>20g</td>
                        </tr>
                        <tr className=''>
                            <td className='stone-600 TextPreset4 py-3 pl-6 pr-0'>Fat</td>
                            <td className='brown-800 font-bold TextPreset4-bold py-3 pr-6 pl-0'>22g</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}