import React, { Component} from "react";
import "./App.css";
import SecurityAdvice from "./SecurityAdvice";

const App = function() {

        return (
            <div id="wrapper">
            <div id="page-container">
                <h1>Підготовка оселі</h1>

                <SecurityAdvice
                    bullet={"-"}
                    text={"нанести захисні смуги зі скочу (паперу, тканини) на віконне скло для підвищення " +
                    "його стійкості до вибухової хвилі та зменшення кількості уламків і уникнення травмування у разі його пошкодження"}
                    position={"left"}
                    icon={"fa-house-chimney-window"}
                />

                <SecurityAdvice
                    text={"по можливості обладнайте укриття у підвалі, захистіть його мішками з піском, " +
                        "передбачте наявність аварійного виходу;"}
                    position={"right"}
                    icon={"fa-door-open"}
                />

                <SecurityAdvice
                    text={"при наявності земельної ділянки обладнайте укриття на такій відстані від будинку, яка  більше його висоти;"}
                    position={"left"}
                    icon={"fa-person-shelter"}
                    />

                <SecurityAdvice
                    text={"забезпечте оселю запасами питної та технічної води;"}
                    position={"right"}
                    icon={"fa-bottle-water"}
                    />

                <SecurityAdvice
                    text={"зробіть запас продуктів тривалого зберігання;"}
                    position={"left"}
                    icon={"fa-plate-wheat"}
                />

                <SecurityAdvice
                    text={"додатково укомплектуйте домашню аптечку засобами надання першої медичної допомоги;"}
                    position={"right"}
                    icon={"fa-kit-medical"}
                />

                <SecurityAdvice
                    text={"підготуйте (закупіть) засоби первинного пожежогасіння;"}
                    position={"left"}
                    icon={"fa-fire-extinguisher"}
                />

                <SecurityAdvice
                    text={"підготуйте ліхтарики (комплекти запасних елементів живлення), гасові лампи та свічки на випадок відключення енергопостачання;"}
                    position={"right"}
                    icon={"fa-battery-full"}
                />

                <SecurityAdvice
                    text={"підготуйте (закупіть)  прилади (примус) для приготування їжі у разі відсутності газу і електропостачання;"}
                    position={"left"}
                    icon={"fa-fire-burner"}
                />

                <SecurityAdvice
                    text={"підготуйте необхідні речі та документи на випадок термінової евакуації або переходу до захисних споруд цивільної оборони або інших сховищ (підвалів, погребів тощо);"}
                    position={"right"}
                    icon={"fa-suitcase-rolling"}
                />

                <SecurityAdvice
                    text={"особистий транспорт тримайте у справному стані із запасом палива для виїзду з небезпечного району;"}
                    position={"left"}
                    icon={"fa-car"}
                />

                <SecurityAdvice
                    text={"при наближенні зимового періоду необхідно продумати питання щодо обігріву оселі у випадку відключення централізованого опалення."}
                    position={"right"}
                    icon={"fa-fire"}
                />

            </div>
            </div>
        );

}
export default App;