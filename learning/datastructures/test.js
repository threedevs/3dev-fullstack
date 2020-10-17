import data from "./data.js"
import functions from "./datastructures.js"
import expected from "./expected.js";
//import { isEmpty, isEqual, xorWith } from 'lodash'

window.addEventListener("load", () => {
    const logEl = document.getElementById("log")
    const dateEl = document.getElementById("lasttest")
    const timeEl = document.getElementById("lttime")
    testFunctions()
    document.getElementById("measure").addEventListener("click", () => testFunctions())
    function testFunctions() {
        performance.mark("all")
        console.log("START TESTS")
        dateEl.innerText = new Date().toString("en-gb")
        logEl.innerHTML = ""
        Object.getOwnPropertyNames(functions)
            .filter(prop => typeof functions[prop] === "function" && prop != "constructor")
            .forEach((fname, i) => {
                const el = document.createElement("p")
                performance.mark("individualtest")
                const result = functions[fname](_.cloneDeep(data))
                const speed = performance.measure("it", "individualtest").duration
                if (!compare(result, expected[i])) {
                    console.log(expected[i])
                    console.log(functions[fname](_.cloneDeep(data)))
                    el.innerText = `FAILED test ${fname} query took ${speed} ms`
                    el.style = "color: red;"
                    console.error("FAILED " + fname)
                } else {
                    el.style = "color: green;"
                    el.innerText = `PASSED test ${fname} query took ${speed} ms`
                    console.log("PASSED " + fname)
                }
                logEl.appendChild(el)
            });
        timeEl.innerText = `all tests took ${performance.measure("it", "all").duration} ms`
    }

    function compare(result, expected) {

        if (result == undefined) {
            console.error("undefined!")
            return false
        }
        //check everything
        //console.log(_.isEqual(result, expected))
        return _.isEqual(result, expected)
    }
});
