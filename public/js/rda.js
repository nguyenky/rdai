function getRdaValues(result, asset = null) {

    var assetId, assetName, index, rawIndex;
    var indicesTot = 0, rawIndicesTot = 0, marketCapTot = 0;
    var i = 0;
    var rank = 0;
    var dp = 4, dp2 = 2; //decimal places

    var topAsset, topAssetIndex;

    $.each(result, function () {
        assetId = this.asset_id;
        assetName = this.asset_name ; //+ " (" + this.asset_symbol + ")";
        marketCap = this.market_cap;
        index = parseFloat(this.index_value);
        rawIndex = parseFloat(this.raw_index_value);
        if (i == 0) {
            topAsset = assetName;
            topAssetIndex = index;
        }
        i++;
        if (index > topAssetIndex) {
            topAsset = assetName;
            topAssetIndex = index;
        }
        if(assetId == asset){
            rank = i;
        }
        indicesTot += index;
        rawIndicesTot += rawIndex;
        marketCapTot += this.market_cap;
    });
    var cmsr = rawIndicesTot * 10;
    var rdaMarketCap =  +((marketCapTot/100) * cmsr).toFixed(0);
    return {
        rda10Index: indicesTot.toFixed(dp),
        rda10MarketCap: '&#36;' + marketCapTot.toLocaleString('en'),
        marketCap: marketCapTot,
        topRda: topAsset,
        topRdaIndex: topAssetIndex.toFixed(dp),
        topRdaWithIndex: topAsset + ' @ ' + topAssetIndex.toFixed(dp),
        cmsr: cmsr.toFixed(dp2),
        rdaMarketCapVal: rdaMarketCap,
        rdaMarketCap: '&#36;' + rdaMarketCap.toLocaleString('en'),
        rank: rank
    };

}

function getChangeTxt(change, changePerc, isCell)
{
    var sign = "";
    var className = "text-primary";
    var arrow = "glyphicon glyphicon-none";
    var upArrow = "glyphicon glyphicon-arrow-up";
    var downArrow = "glyphicon glyphicon-arrow-down";

    if(change > 0) {
        //sign = "+";
        arrow = upArrow;
        className = "text-success";
    }
    else if (change < 0) {
        sign = "";
        arrow = downArrow;
        className = "text-danger";
    }
    // else {
    //     sign = "---";
    // }
    change = (Math.round(change * 100) / 100).toFixed(2);
    var changeTxt = "<i class='" + arrow + "'> " + sign + change + "</i> (" + sign + changePerc + "%)";
    var cell = isCell? "<td class='" + className + "'>" + changeTxt + "</td>" : "<span class='" + className + "'>" + changeTxt + "</span>";
    return cell;
}

function getRank(i) {
    var x;
    switch (parseInt(i))
    {
        case 1: x = i + "st"; break;
        case 2: x = i + "nd"; break;
        case 3: x = i + "rd"; break;
        default: x = i + "th"; break;
    }
    return x;
}
