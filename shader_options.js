function setLightingShaderOptions(asp) {
    var asrc = document.getElementById("source").value;
    if (asrc == "texture") {
        gl.uniform1i(asp.clrSource, 1);
    } else if (asrc == "math") {
        gl.uniform1i(asp.clrSource, 2);
    } else if (asrc == "other") {
        gl.uniform1i(asp.clrSource, 3);
    }

    var ashade = document.getElementById("shade").value;
    if (ashade == "flat") {
        gl.uniform1i(asp.shadeMode, 1);
    } else if (ashade == "gouraud") {
        gl.uniform1i(asp.shadeMode, 2);
    } else if (ashade == "phong") {
        gl.uniform1i(asp.shadeMode, 3);
    }

    var alight = document.getElementById("light").value;
    if (alight == "ambient") {
        gl.uniform1i(asp.lightMode, 1);
        gl.uniform1i(asp.lightModeVS, 1);
    } else if (alight == "diffuse") {
        gl.uniform1i(asp.lightMode, 2);
        gl.uniform1i(asp.lightModeVS, 2);
    } else if (alight == "phong") {
        gl.uniform1i(asp.lightMode, 3);
        gl.uniform1i(asp.lightModeVS, 3);
    }

    var bmpbool = document.getElementById("bumpBool").checked;
    gl.uniform1i(asp.bumpBool, bmpbool);
    gl.uniform1i(asp.useLightingUniform, true);

    gl.uniform3f(
        asp.ambientColorUniform,
        parseFloat(document.getElementById("ambientR").value),
        parseFloat(document.getElementById("ambientG").value),
        parseFloat(document.getElementById("ambientB").value)
    );

    var lightingDirection = [
        parseFloat(document.getElementById("lightDirectionX").value),
        parseFloat(document.getElementById("lightDirectionY").value),
        parseFloat(document.getElementById("lightDirectionZ").value)
    ];

    var adjustedLD = vec3.create();
    vec3.normalize(lightingDirection, adjustedLD);
    vec3.scale(adjustedLD, -1);
    gl.uniform3fv(asp.lightingDirectionUniform, adjustedLD);

    gl.uniform3f(
        asp.directionalColorUniform,
        parseFloat(document.getElementById("directionalR").value),
        parseFloat(document.getElementById("directionalG").value),
        parseFloat(document.getElementById("directionalB").value)
    );

    gl.uniform3(
        asp.ambientColorUniformFS,
        parseFloat(document.getElementById("ambientR").value),
        parseFloat(document.getElementById("ambientG").value),
        parseFloat(document.getElementById("ambientB").value)
    );

    gl.uniform3fv(asp.lightingDirectionUniformFS, adjustedLD);

    gl.uniform3f(
        asp.directionalColorUniformFS,
        parseFloat(document.getElementById("directionalR").value),
        parseFloat(document.getElementById("directionalG").value),
        parseFloat(document.getElementById("directionalB").value)
    );
}