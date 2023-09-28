leftsort = [259, 260, 264, 265, 273, 276, 279, 300]
rightsort = [214, 262, 266, 275, 290, 306]

function merge_sort(leftsort , rightsort){
    result = []
    i =0
    j =0
    while (i<=leftsort.length-1 || j<=rightsort.length-1){
        if (i<leftsort.length-1 && j ==rightsort.length){
            while (i<=leftsort.length-1){
                result.push(leftsort[i]);
                i++;
            }
            return result
        }
        
        if (i==leftsort.length && j<rightsort.length){
            while (j<=rightsort.length-1){
                result.push(rightsort[j]);
                j++;
            }
            return result
        }

        if (leftsort[i]<=rightsort[j]){
            result.push(leftsort[i]);
            i++;
        }
        else if (rightsort[j]<=leftsort[i]){
            result.push(rightsort[j]);
            j++
        }
        
    }
}

console.log(merge_sort(leftsort,rightsort))
