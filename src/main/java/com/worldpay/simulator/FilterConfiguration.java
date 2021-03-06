package com.worldpay.simulator;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.CommonsRequestLoggingFilter;

@Component
public class FilterConfiguration {

    @Bean
    public RequestLogFilter requestLoggingFilter() {
        RequestLogFilter loggingFilter = loggingFilterInstance();
        loggingFilter.setIncludeClientInfo(true);
        loggingFilter.setIncludeQueryString(true);
        loggingFilter.setIncludeHeaders(true);
        return loggingFilter;
    }

    public RequestLogFilter loggingFilterInstance() {
        return new RequestLogFilter();
    }
}
