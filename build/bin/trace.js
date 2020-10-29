start_bn = 0;
end_bn = 4000000;

sampling_rate = 100;

for (var i = start_bn; i < end_bn; i++) {
    if (i % sampling_rate == 0) {
        hex_bn = "0x" + i.toString(16);
        debug.traceBlockByNumber(hex_bn);
    }
}
