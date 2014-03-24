(function (nx, global) {


    var topologyData = {"nodes": [
        {"id": 0, "level": 1, "dx": 1.3930167897403818, "dy": -1.8591564932762021, "x": 715.6420030819158, "y": 104.871634409812, "fixed": true},
        {"id": 1, "level": 3, "dx": 4.611687323401031, "dy": -3.175580693632786, "x": 649.936219267949, "y": 1.8527424313556757, "fixed": true},
        {"id": 2, "level": 3, "dx": 6.483670964681099, "dy": -2.77810326817076, "x": 680.9202975821179, "y": -199.5529306103872, "fixed": true},
        {"id": 3, "level": 3, "dx": 4.977718992363725, "dy": -3.39296712808242, "x": 828.578528526348, "y": -280.91635873852056, "fixed": true},
        {"id": 4, "level": 3, "dx": 3.0843311813991394, "dy": -2.1981998359821215, "x": 945.4765653075766, "y": -147.4959526340074, "fixed": true},
        {"id": 5, "level": 2, "dx": 1.5702830101214393, "dy": -2.1226956223988487, "x": 941.9312222963399, "y": 20.50072669336945, "fixed": true},
        {"id": 6, "level": 3, "dx": 1.6088450764244817, "dy": -2.4401880234105775, "x": 1451.2079310718766, "y": -49.03349580135617, "fixed": true},
        {"id": 7, "level": 2, "dx": 1.478774986420475, "dy": -2.523503834398797, "x": 1331.0760116949516, "y": -144.9516889457129, "fixed": true},
        {"id": 8, "level": 3, "dx": 1.2345582823198207, "dy": -3.456147149898671, "x": 1919.7999373034547, "y": -225.93088690669876, "fixed": true},
        {"id": 9, "level": 3, "dx": 1.3936650027303124, "dy": -3.5926537844824935, "x": 2012.995769621642, "y": -136.97932356967496, "fixed": true},
        {"id": 10, "level": 3, "dx": 1.1445127029705042, "dy": -3.761455908426325, "x": 2079.8989369800192, "y": -268.4134137159543, "fixed": true},
        {"id": 11, "level": 3, "dx": 1.3818211209664264, "dy": -3.5607944507628484, "x": 1975.736839189302, "y": -49.800598467373455, "fixed": true},
        {"id": 12, "level": 3, "dx": 1.3529976778539807, "dy": -3.776789797055355, "x": 2106.446499639693, "y": -144.96675999697874, "fixed": true},
        {"id": 13, "level": 2, "dx": 1.0137289185984817, "dy": -3.065869848062258, "x": 1705.6820506030501, "y": -355.5577962203151, "fixed": true},
        {"id": 14, "level": 3, "dx": 0.2173821323222267, "dy": -2.3239238366607147, "x": 2082.5533888242826, "y": -938.7220138574689, "fixed": true},
        {"id": 15, "level": 4, "dx": -4.775368206122282, "dy": -8.13883948998028, "x": 2166.69703190796, "y": -1022.3443359814399, "fixed": true},
        {"id": 16, "level": 3, "dx": 0.697607523650597, "dy": -1.2331621840382005, "x": 2262.155379725833, "y": -1077.2418504493298, "fixed": true},
        {"id": 17, "level": 4, "dx": 4.238630633530555, "dy": 4.147397882369825, "x": 2916.9469912165478, "y": -1550.8395811255514, "fixed": true},
        {"id": 18, "level": 4, "dx": 2.8625320508605085, "dy": 2.453399171182125, "x": 2797.294899597796, "y": -1448.394367413528, "fixed": true},
        {"id": 19, "level": 3, "dx": 1.0952397791151307, "dy": -0.7212632866394761, "x": 2553.000049383081, "y": -1277.9744819900177, "fixed": true},
        {"id": 20, "level": 3, "dx": 3.5743682687429787, "dy": -1.5544751633916523, "x": 2584.9231141215996, "y": -1429.5402468214388, "fixed": true},
        {"id": 21, "level": 4, "dx": 6.171966960105374, "dy": -8.644929209305205, "x": 2309.824239236291, "y": -1642.7749226273274, "fixed": true},
        {"id": 22, "level": 4, "dx": 7.663678059969177, "dy": -9.224351963926894, "x": 2252.8138947889397, "y": -1787.0498156055762, "fixed": true},
        {"id": 23, "level": 4, "dx": 8.444917426905542, "dy": -7.855408594277141, "x": 2377.3256529938712, "y": -1853.4372284800486, "fixed": true},
        {"id": 24, "level": 4, "dx": 6.4909381921846405, "dy": -7.22076217238162, "x": 2446.07034764884, "y": -1662.8002963117945, "fixed": true},
        {"id": 25, "level": 3, "dx": 4.30408272134703, "dy": -7.347203422403592, "x": 2439.391090647957, "y": -1436.5460462712167, "fixed": true},
        {"id": 26, "level": 4, "dx": 4.4201711246901, "dy": -11.124191924059708, "x": 3206.2348653328377, "y": -642.0685469785498, "fixed": true},
        {"id": 27, "level": 4, "dx": 3.783306514876041, "dy": -10.12192905149466, "x": 3084.013358211113, "y": -730.6508364930338, "fixed": true},
        {"id": 28, "level": 4, "dx": 2.8838568768839226, "dy": -8.221836255549865, "x": 2832.2230974211566, "y": -893.8053242826993, "fixed": true},
        {"id": 29, "level": 3, "dx": 2.1514084885130167, "dy": -6.54083258927556, "x": 2509.706593923769, "y": -1085.5171019793588, "fixed": true},
        {"id": 30, "level": 3, "dx": 1.5443727037410937, "dy": -5.036731067068699, "x": 2179.568336943981, "y": -843.2325305908407, "fixed": true},
        {"id": 31, "level": 2, "dx": 0.37582862782267334, "dy": -3.189648553174216, "x": 1827.5893696901217, "y": -669.2439170866169, "fixed": true},
        {"id": 32, "level": 2, "dx": -0.8700695161947263, "dy": -2.8044964753225425, "x": 1254.4680752891975, "y": -407.2460107533541, "fixed": true},
        {"id": 33, "level": 3, "dx": -0.797891506722693, "dy": -1.303582645949715, "x": 1562.2669653448738, "y": 943.141297086433, "fixed": true},
        {"id": 34, "level": 3, "dx": -0.8070674250346408, "dy": -1.3782208817079344, "x": 1458.9225786421055, "y": 828.0832776478509, "fixed": true},
        {"id": 35, "level": 3, "dx": -1.1697357725345663, "dy": -1.5773876999378773, "x": 1247.549740878036, "y": 587.4742193069578, "fixed": true},
        {"id": 36, "level": 3, "dx": -1.8889797232308254, "dy": -1.9439659603389159, "x": 948.824828082531, "y": 242.9598833201919, "fixed": true},
        {"id": 37, "level": 1, "dx": -2.4792991765163457, "dy": -2.411105354094093, "x": 660.4913575262191, "y": -96.09699797705187, "fixed": true},
        {"id": 38, "level": 2, "dx": -10.528176230568315, "dy": 8.449300111297177, "x": -2655.032775199953, "y": 249.78388402597875, "fixed": true},
        {"id": 39, "level": 3, "dx": -10.95996040382748, "dy": 8.973470372769297, "x": -2719.1651011423924, "y": 128.4316529754812, "fixed": true},
        {"id": 40, "level": 2, "dx": -10.070633687601688, "dy": 7.561683374940855, "x": -2570.3785086665375, "y": 389.66569221080937, "fixed": true},
        {"id": 41, "level": 3, "dx": -9.892423445557869, "dy": 7.659948506901039, "x": -2559.7644973565416, "y": 634.1163797799968, "fixed": true},
        {"id": 42, "level": 2, "dx": -9.887237818871032, "dy": 5.450040595022309, "x": -2419.32697120839, "y": 627.2950192372879, "fixed": true},
        {"id": 43, "level": 2, "dx": -9.9544991594701, "dy": 2.591663844596993, "x": -2213.181491630901, "y": 902.6561254616171, "fixed": true},
        {"id": 44, "level": 2, "dx": -10.174157821867826, "dy": -0.7905343852946122, "x": -1945.2325404651422, "y": 1191.3949780276212, "fixed": true},
        {"id": 45, "level": 3, "dx": -11.761618734635777, "dy": -3.4762600085736484, "x": -1630.8269986883504, "y": 1616.1084655962418, "fixed": true},
        {"id": 46, "level": 3, "dx": -13.232659053291982, "dy": -3.8357900055302903, "x": -1651.3286002233422, "y": 1752.6078475094141, "fixed": true},
        {"id": 47, "level": 3, "dx": -11.816463954607178, "dy": -3.952418228422193, "x": -1721.3443587565096, "y": 1596.6793071299376, "fixed": true},
        {"id": 48, "level": 2, "dx": -10.156965702644882, "dy": -3.2316930128737544, "x": -1690.5541999113073, "y": 1391.874803673881, "fixed": true},
        {"id": 49, "level": 2, "dx": -8.263787874659842, "dy": -3.1347730656395325, "x": -1455.1411229591583, "y": 1137.5690121118037, "fixed": true},
        {"id": 50, "level": 3, "dx": -6.317800713176858, "dy": -2.7750380812036806, "x": -1221.1691105481477, "y": 962.743328518816, "fixed": true},
        {"id": 51, "level": 2, "dx": -6.003484742548958, "dy": -2.6268413745803194, "x": -1194.036855446848, "y": 820.6658629740162, "fixed": true},
        {"id": 52, "level": 2, "dx": -3.7335567341278546, "dy": -1.8149405128748657, "x": -908.8021276079992, "y": 457.06295529859733, "fixed": true},
        {"id": 53, "level": 3, "dx": -0.40298151221328027, "dy": -8.068581278972761, "x": -1696.2927762809418, "y": 26.920421542599648, "fixed": true},
        {"id": 54, "level": 3, "dx": -0.42022965669847223, "dy": -6.5920951938531385, "x": -1554.1240498575849, "y": 29.624013583744052, "fixed": true},
        {"id": 55, "level": 3, "dx": -0.5830837093445469, "dy": -4.577926285278215, "x": -1297.2658311454745, "y": 37.33147216625959, "fixed": true},
        {"id": 56, "level": 3, "dx": -1.0345423519683998, "dy": -2.518194561349965, "x": -948.8763138148659, "y": 51.33782265496146, "fixed": true},
        {"id": 57, "level": 2, "dx": -1.7532510553161726, "dy": -1.203172020919592, "x": -589.020191493957, "y": 67.72828261345137, "fixed": true},
        {"id": 58, "level": 1, "dx": -1.6022942853283044, "dy": -0.47808115593547784, "x": -29.297076797998045, "y": -220.84375268796646, "fixed": true},
        {"id": 59, "level": 2, "dx": -1.0391545181005903, "dy": 3.3366644442948785, "x": -625.5246404950085, "y": -757.6288361732154, "fixed": true},
        {"id": 60, "level": 2, "dx": -0.9040664912839136, "dy": 2.5236877305821093, "x": -484.7696950741853, "y": -714.2371656364436, "fixed": true},
        {"id": 61, "level": 1, "dx": -0.9939866242310481, "dy": 1.2162923935543373, "x": -269.23436526915026, "y": -643.9476691858948, "fixed": true},
        {"id": 62, "level": 2, "dx": -1.584856608467415, "dy": 2.5108760414421263, "x": -537.5726901699798, "y": -1165.392008819228, "fixed": true},
        {"id": 63, "level": 3, "dx": -1.7799476107892793, "dy": 2.664663222740868, "x": -627.1530251822204, "y": -1270.540478980806, "fixed": true},
        {"id": 64, "level": 3, "dx": -1.917352712100808, "dy": 3.582771137297714, "x": -719.4903129333222, "y": -1265.8147568951174, "fixed": true},
        {"id": 65, "level": 3, "dx": -2.424121545389735, "dy": 2.8205419536857743, "x": -602.1111506056634, "y": -1366.3725342030593, "fixed": true},
        {"id": 66, "level": 2, "dx": -1.139303026147769, "dy": 2.0557860461737145, "x": -457.80749464186766, "y": -1080.3610375131288, "fixed": true},
        {"id": 67, "level": 3, "dx": -1.8721628411195042, "dy": 1.2163767977376634, "x": -278.1954648645907, "y": -1218.1316266355095, "fixed": true},
        {"id": 68, "level": 3, "dx": -2.302416040788514, "dy": 1.244062237338544, "x": -313.03476773231745, "y": -1357.439499768676, "fixed": true},
        {"id": 69, "level": 3, "dx": -2.3010149814096943, "dy": 0.7556708077261347, "x": -160.28584794681063, "y": -1360.3179892074086, "fixed": true},
        {"id": 70, "level": 3, "dx": -2.519893551311636, "dy": 1.0632914327979006, "x": -253.46597025861118, "y": -1432.9980869752135, "fixed": true},
        {"id": 71, "level": 1, "dx": -1.1071919813941482, "dy": 1.7297680766382206, "x": -340.0860438927846, "y": -951.307139106298, "fixed": true},
        {"id": 72, "level": 1, "dx": 0.24648534723314963, "dy": 1.470893646279014, "x": -115.74659048706424, "y": -418.65602034646366, "fixed": true},
        {"id": 73, "level": 2, "dx": 1.9592251607662952, "dy": 7.050679517796272, "x": -472.6716466725683, "y": 3816.4109609961542, "fixed": true},
        {"id": 74, "level": 3, "dx": 1.6234022073939958, "dy": 7.207888603308379, "x": -525.9102214376944, "y": 3718.299387552745, "fixed": true},
        {"id": 75, "level": 2, "dx": 1.425990149005108, "dy": 6.724923164952173, "x": -362.0250385504805, "y": 3694.5419262630753, "fixed": true},
        {"id": 76, "level": 2, "dx": 0.6198301623666509, "dy": 6.160585011128807, "x": -138.2986646539576, "y": 3565.185624869783, "fixed": true},
        {"id": 77, "level": 2, "dx": -0.3181199120322705, "dy": 5.573970631566566, "x": 115.64878641764206, "y": 3398.5915790314634, "fixed": true},
        {"id": 78, "level": 2, "dx": -1.0885282897412492, "dy": 5.059455778301337, "x": 375.55365772743454, "y": 3202.4533678009566, "fixed": true},
        {"id": 79, "level": 3, "dx": -2.1669082689211603, "dy": 4.938674451278693, "x": 736.6274719471318, "y": 3172.871129659519, "fixed": true},
        {"id": 80, "level": 3, "dx": -2.7915793072620563, "dy": 5.106201881210913, "x": 775.4627627637451, "y": 3303.092627180745, "fixed": true},
        {"id": 81, "level": 3, "dx": -2.4445402968818257, "dy": 5.5937794101620035, "x": 889.1225899073806, "y": 3236.5516657143307, "fixed": true},
        {"id": 82, "level": 2, "dx": -1.609415361042739, "dy": 4.655863956163528, "x": 616.9372171006775, "y": 3002.5826135238126, "fixed": true},
        {"id": 83, "level": 3, "dx": -1.5303757955067123, "dy": 4.572412371815651, "x": 907.2075516772647, "y": 2712.5388584755815, "fixed": true},
        {"id": 84, "level": 3, "dx": -1.5726719848952158, "dy": 4.970280602079297, "x": 1045.9284193774563, "y": 2732.5205184910824, "fixed": true},
        {"id": 85, "level": 2, "dx": -1.5001525973933052, "dy": 4.429542402734533, "x": 704.7020052795013, "y": 2686.1669949418792, "fixed": true},
        {"id": 86, "level": 2, "dx": -0.9523180424291187, "dy": 4.005937774439111, "x": 635.3572195132522, "y": 2290.9057445587114, "fixed": true},
        {"id": 87, "level": 2, "dx": -0.10056855790282071, "dy": 3.4188030876279316, "x": 537.6350580374746, "y": 1821.1221042770942, "fixed": true},
        {"id": 88, "level": 2, "dx": 0.8111727915245273, "dy": 2.632989724385321, "x": 423.62028490114534, "y": 1306.5464218110612, "fixed": true},
        {"id": 89, "level": 2, "dx": 1.6328807437678479, "dy": 1.1294219738292233, "x": 293.67663130114374, "y": 714.3128705266137, "fixed": true},
        {"id": 90, "level": 3, "dx": 1.582383176667575, "dy": 3.480991430393883, "x": -188.35772518427748, "y": 132.91158132280387, "fixed": true},
        {"id": 91, "level": 3, "dx": 1.7029248635798675, "dy": 2.2350314321353526, "x": -50.80274480538541, "y": 149.54386044585246, "fixed": true},
        {"id": 92, "level": 1, "dx": 1.722210744466207, "dy": 1.1968686457862794, "x": 139.87169130666902, "y": 181.78350186739252, "fixed": true},
        {"id": 93, "level": 2, "dx": 4.279749298968896, "dy": 1.6621427127886168, "x": 298.4323610678868, "y": 576.2883445962402, "fixed": true},
        {"id": 94, "level": 2, "dx": 4.533336371804725, "dy": 0.4738124493431526, "x": 203.31390439356625, "y": 747.8059201161096, "fixed": true},
        {"id": 95, "level": 2, "dx": 5.986251845369753, "dy": 1.492185309681771, "x": 65.45964500069505, "y": 911.8379669806613, "fixed": true},
        {"id": 96, "level": 2, "dx": 5.831502885260151, "dy": 1.9520932417383023, "x": -88.11640784580587, "y": 880.3727790305827, "fixed": true},
        {"id": 97, "level": 2, "dx": 4.797466011532611, "dy": 1.521973437704525, "x": -6.755839002353343, "y": 689.935093489624, "fixed": true},
        {"id": 98, "level": 2, "dx": 4.24955470072768, "dy": 1.1148909684645614, "x": 186.25362960940123, "y": 478.3743802038564, "fixed": true},
        {"id": 99, "level": 1, "dx": 2.683830050393266, "dy": -0.1708869879967807, "x": 389.36674724683303, "y": 300.16595232404103, "fixed": true}
    ], "links": [
        {"source": 0, "target": 37},
        {"source": 37, "target": 58},
        {"source": 58, "target": 61},
        {"source": 61, "target": 71},
        {"source": 71, "target": 72},
        {"source": 72, "target": 92},
        {"source": 92, "target": 99},
        {"source": 99, "target": 0},
        {"source": 0, "target": 5},
        {"source": 5, "target": 7},
        {"source": 7, "target": 13},
        {"source": 13, "target": 31},
        {"source": 31, "target": 32},
        {"source": 32, "target": 37},
        {"source": 0, "target": 1},
        {"source": 1, "target": 2},
        {"source": 2, "target": 3},
        {"source": 3, "target": 4},
        {"source": 4, "target": 5},
        {"source": 5, "target": 0},
        {"source": 0, "target": 1},
        {"source": 6, "target": 7},
        {"source": 8, "target": 9},
        {"source": 8, "target": 10},
        {"source": 8, "target": 11},
        {"source": 8, "target": 12},
        {"source": 8, "target": 13},
        {"source": 8, "target": 9},
        {"source": 14, "target": 16},
        {"source": 16, "target": 19},
        {"source": 19, "target": 20},
        {"source": 20, "target": 25},
        {"source": 25, "target": 29},
        {"source": 29, "target": 30},
        {"source": 30, "target": 31},
        {"source": 31, "target": 14},
        {"source": 14, "target": 15},
        {"source": 15, "target": 16},
        {"source": 16, "target": 14},
        {"source": 14, "target": 15},
        {"source": 17, "target": 18},
        {"source": 18, "target": 19},
        {"source": 17, "target": 18},
        {"source": 21, "target": 22},
        {"source": 22, "target": 23},
        {"source": 23, "target": 24},
        {"source": 24, "target": 25},
        {"source": 25, "target": 21},
        {"source": 21, "target": 22},
        {"source": 26, "target": 27},
        {"source": 27, "target": 28},
        {"source": 28, "target": 29},
        {"source": 26, "target": 27},
        {"source": 33, "target": 34},
        {"source": 34, "target": 35},
        {"source": 35, "target": 36},
        {"source": 36, "target": 37},
        {"source": 33, "target": 34},
        {"source": 38, "target": 40},
        {"source": 40, "target": 42},
        {"source": 42, "target": 43},
        {"source": 43, "target": 44},
        {"source": 44, "target": 48},
        {"source": 48, "target": 49},
        {"source": 49, "target": 51},
        {"source": 51, "target": 52},
        {"source": 52, "target": 57},
        {"source": 57, "target": 58},
        {"source": 38, "target": 39},
        {"source": 38, "target": 40},
        {"source": 38, "target": 39},
        {"source": 41, "target": 42},
        {"source": 45, "target": 46},
        {"source": 46, "target": 47},
        {"source": 47, "target": 48},
        {"source": 48, "target": 45},
        {"source": 45, "target": 46},
        {"source": 50, "target": 51},
        {"source": 53, "target": 54},
        {"source": 54, "target": 55},
        {"source": 55, "target": 56},
        {"source": 56, "target": 57},
        {"source": 53, "target": 54},
        {"source": 59, "target": 60},
        {"source": 60, "target": 61},
        {"source": 59, "target": 60},
        {"source": 62, "target": 66},
        {"source": 66, "target": 71},
        {"source": 71, "target": 62},
        {"source": 62, "target": 63},
        {"source": 62, "target": 64},
        {"source": 62, "target": 65},
        {"source": 62, "target": 66},
        {"source": 62, "target": 63},
        {"source": 67, "target": 68},
        {"source": 67, "target": 69},
        {"source": 67, "target": 70},
        {"source": 67, "target": 71},
        {"source": 67, "target": 68},
        {"source": 73, "target": 75},
        {"source": 75, "target": 76},
        {"source": 76, "target": 77},
        {"source": 77, "target": 78},
        {"source": 78, "target": 82},
        {"source": 82, "target": 85},
        {"source": 85, "target": 86},
        {"source": 86, "target": 87},
        {"source": 87, "target": 88},
        {"source": 88, "target": 89},
        {"source": 89, "target": 92},
        {"source": 73, "target": 74},
        {"source": 74, "target": 75},
        {"source": 73, "target": 74},
        {"source": 79, "target": 80},
        {"source": 79, "target": 81},
        {"source": 79, "target": 82},
        {"source": 79, "target": 80},
        {"source": 83, "target": 84},
        {"source": 83, "target": 85},
        {"source": 83, "target": 84},
        {"source": 90, "target": 91},
        {"source": 91, "target": 92},
        {"source": 90, "target": 91},
        {"source": 93, "target": 94},
        {"source": 94, "target": 95},
        {"source": 95, "target": 96},
        {"source": 96, "target": 97},
        {"source": 97, "target": 98},
        {"source": 98, "target": 99},
        {"source": 99, "target": 93},
        {"source": 93, "target": 94}
    ], "nodeSet": [
        {"nodes": [63, 64, 65, 62, 66, 67, 68, 69, 70, 71, 59, 60, 61, 72], "label": "63-72", "x": -627.1530251822204, "y": -1270.540478980806, name: "Node Set 1"},
        {name: "Node Set 2", "nodes": [17, 18, 19, 20, 24, 28, 29, 26, 27, 25, 23, 16, 21, 30, 22, 15, 14], "label": "14-17", "x": 2916.9469912165478, "y": -1550.8395811255514},
        {name: "Node Set 3", "nodes": [3, 13, 31, 32, 0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 36, 37, 99, 35, 93, 89, 101, 34, 33, 98, 97, 95, 96, 92, 91, 90], "label": "3-90", "x": 828.578528526348, "y": -280.91635873852056},
        {name: "Node Set 4", "nodes": [38, 39, 40, 41, 42, 43, 44, 47, 53, 48, 45, 46, 54, 49, 50, 51, 55, 52, 56, 57], "label": "38-57", "x": -2655.032775199953, "y": 249.78388402597875},
//        {name:"Node Set 5","nodes": [94, 88, 86, 87, 82, 83, 84, 85, 79, 78, 81, 80, 76, 77, 74, 75, 73], "label": "73-94", "x": 203.31390439356625, "y": 747.8059201161096}
    ]};
    nx.define('NodeSet.Aggregation', nx.ui.Component, {
        view: {
            content: {
                name: 'topo',
                type: 'nx.graphic.Topology',
                props: {
                    adaptive: true,
                    identityKey: 'id',
                    nodeLabel: 'model.id',
                    nodeIconType: 'model.device_type',
                    showIcon: false,
                    data: topologyData,
                    enableSmartLabel: false,
                    enableSmartNode: false,
                    enableGradualScaling: false,
//                    supportMultipleLink: false
                }
            }
        }
    });

})(nx, nx.global);