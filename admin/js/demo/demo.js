for (let i = 0; i < data.length; i++) {


    total_max.push(data[i].total)

    total += data[i].total

    let ngaymua = data[i].ngaymua

    let month_1 = /[0-9]{2}-1-[0-9]{4}/
    let resoult_1 = month_1.test(ngaymua)
    if (resoult_1 == true) {
        thang_1 += 1
    }

    let month_2 = /[0-9]{2}-2-[0-9]{4}/
    let resoult_2 = month_2.test(ngaymua)

    if (resoult_2 == true) {
        thang_2 += 1
    }

    let month_3 = /[0-9]{2}-3-[0-9]{4}/
    let resoult_3 = month_3.test(ngaymua)

    if (resoult_3 == true) {
        thang_3 += 1
    }


    let month_4 = /[0-9]{2}-4-[0-9]{4}/
    let resoult_4 = month_4.test(ngaymua)

    if (resoult_4 == true) {
        thang_4 += 1
    }

    let month_5 = /[0-9]{2}-5-[0-9]{4}/
    let resoult_5 = month_5.test(ngaymua)

    if (resoult_5 == true) {
        thang_5 += 1
    }

    let month_6 = /[0-9]{2}-6-[0-9]{4}/
    let resoult_6 = month_6.test(ngaymua)

    if (resoult_6 == true) {
        thang_6 += 1
    }

    let month_7 = /[0-9]{2}-7-[0-9]{4}/
    let resoult_7 = month_7.test(ngaymua)

    if (resoult_7 == true) {
        thang_7 += 1
    }



}